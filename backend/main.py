from fastapi import FastAPI

app = FastAPI(
    title="BIXOO Seller API",
    description="Backend API for BIXOO Seller",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "BIXOO Seller API is running"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "success",
        "message": "API is healthy"
    }