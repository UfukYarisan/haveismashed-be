FROM node:22-alpine AS builder

# Çalışma dizini
WORKDIR /app

# Bağımlılık dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

COPY . .

ARG RUN_MODE
ARG PORT

ENV RUN_MODE=${RUN_MODE}
ENV PORT=${PORT}


EXPOSE ${PORT}

CMD ["sh", "-c", "if [ \"$RUN_MODE\" = \"DEV\" ] ; then npm run dev:docker; elif [ \"$RUN_MODE\" = \"PROD\" ] ; then npm start; fi"]