FROM node:8

ADD ./docker-entrypoint.sh /
RUN chmod a+x /docker-entrypoint.sh

RUN cd /tmp && wget http://ftp.us.debian.org/debian/pool/main/j/jq/jq_1.4-2.1+deb8u1_amd64.deb && dpkg -i ./jq*.deb

ENTRYPOINT /docker-entrypoint.sh
