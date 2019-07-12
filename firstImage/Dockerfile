# Use an official Python runtime as aparent image
FROM python:2.7-slim

# Set the working directory to /appp
WORKDIR /appp

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip intsall --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container 
EXPOSE 80

# Define enc=vironment variable
ENV NAME world

# Run app.py when the container launches
CMD ["python", "app.py"]