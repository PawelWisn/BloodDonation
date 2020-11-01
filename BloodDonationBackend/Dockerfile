FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY entrypoint.sh .
COPY . .
HEALTHCHECK --interval=85600s --timeout=180s CMD python manage.py runscript sendEmailRemainders
ENTRYPOINT ["./entrypoint.sh"]
