# Use a minimal Go image
FROM golang:1.24-alpine
# Set working directory inside container
WORKDIR /app

# Copy Go module files and download dependencies
COPY go.mod go.sum ./
RUN go mod tidy

# Copy the source code
COPY . .

# Build the Go application
RUN go build -o main .

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["/app/main"]
