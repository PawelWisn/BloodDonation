FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH="${PYTHONPATH}:/"
ENV DISPLAY=:99

RUN mkdir /code
WORKDIR /code
RUN pip install --upgrade pip
RUN apt-get update && apt-get -y install libpq-dev gcc python3-distutils
COPY requirements/requirements.txt .
RUN pip install -r requirements.txt
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
# RUN apt-get -y update
# RUN apt-get install -y google-chrome-stable
# RUN apt-get install -yqq unzip
# RUN wget -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/`curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE`/chromedriver_linux64.zip
# RUN unzip /tmp/chromedriver.zip chromedriver -d /usr/local/bin/


COPY . .

HEALTHCHECK --interval=600s --timeout=100s CMD python manage.py runscript dailyExecution
ENTRYPOINT ["./entrypoint.sh"]
