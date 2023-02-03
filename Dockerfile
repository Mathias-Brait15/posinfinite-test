FROM node:latest
WORKDIR /app
COPY . .
RUN npm install --production
ENV PORT=4002
ENV NODE_ENV=production
ENV TOKEN_RAHASIA=tokenrahasia
ENV DATABASE_URL=postgresql://postgres:rVnbQedzUdaMPa17@db.wrtsznekbmbqmlsjvqhm.supabase.co:5432/postgres
EXPOSE 4002
CMD ["node", "app"]