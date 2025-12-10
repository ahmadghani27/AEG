# --- Stage 1: Build the App ---
# Pake Node versi Alpine biar image-nya enteng
FROM node:18-alpine as build-stage

# Set working directory di dalem container
WORKDIR /app

# Copy package.json & lockfile dulu biar bisa cache layer install-nya
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua sisa source code ke dalem container
COPY . .

# Build project-nya (outputnya nanti ada di folder /dist)
RUN npm run build

# --- Stage 2: Serve with Nginx ---
# Pake Nginx versi Alpine juga, super kecil size-nya
FROM nginx:alpine as production-stage

# Copy hasil build dari Stage 1 ke folder default Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy config Nginx custom kita (buat handle SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (standard web port)
EXPOSE 80

# Jalanin Nginx di foreground biar container gak mati
CMD ["nginx", "-g", "daemon off;"]
