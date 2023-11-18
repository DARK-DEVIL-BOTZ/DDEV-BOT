FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/DARK-DEVIL-BOTZ/DDEV-BOT /root/DDEV
WORKDIR /root/DDEV/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]