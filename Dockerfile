FROM node:8

ADD ./garbage-robot.sh /
RUN chmod a+x /garbage-robot.sh

RUN cd /tmp && wget http://ftp.us.debian.org/debian/pool/main/j/jq/jq_1.4-2.1+deb8u1_amd64.deb && dpkg -i ./jq*.deb

ENTRYPOINT /garbage-robot.sh
