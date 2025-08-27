FROM node:18
WORKDIR /app
COPY package.json tsconfig.json ./
COPY packages ./packages
COPY apps/web ./apps/web
RUN npm install --workspace packages/shared --workspace apps/web --include-workspace-root false
RUN npm run -w packages/shared build
RUN npm run -w apps/web build
CMD ["npm", "run", "-w", "apps/web", "preview", "--", "--host"]
