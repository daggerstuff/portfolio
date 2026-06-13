---
description: Best practices for managing and deploying AI models from Hugging Face within the AI Engine.
---

# Hugging Face: Modeling the Human Psyche

## 🎭 The Role of LLMs in Pixelated Empathy

We leverage Hugging Face models (Transformers, Diffusers) within the `/ai` submodule to power the **Emotional Intelligence Engine**. These models are responsible for real-time sentiment analysis, persona generation, and crisis signal detection.

## 🛠️ Performance & Lifecycle

### 1. The Single Model File Policy (SMFP)

- **Readability first**: Keep all the forward-pass logic for a specific emotional model in a single file to improve auditability for therapists and developers alike.

### 2. Model Management with `uv`

- **Dependencies**: All transformers/torch versions must be strictly managed in `pyproject.toml` via **uv**.
- **Execution**: Run model scripts with `uv run`.

## 💎 Optimization Techniques

- **Mixed Precision (FP16/BF16)**: Mandatory for real-time inference to maintain <200ms latency.
- **Quantization (bitsandbytes)**: Use 4/8-bit quantization for large persona models to save VRAM.
- **ONNX/TensorRT**: Convert finished models to high-performance formats for production deployment.

## 🛡️ Security & Ethics

- **Prompt Injection Defense**: Every model input MUST be sanitized to prevent "persona hijacking."
- **Bias Auditing**: Run `pnpm test:ai-bias` to verify model scores aren't biased against specific demographics.
- **Zero-Leak Policy**: Ensure models do not "hallucinate" or echo PII/PHI from training data.

## 🧪 Integration with Astro

- **WebSockets**: Real-time model outputs (e.g., streaming emotions) are delivered via `socket.io`.
- **Latency Monitoring**: Track tokens per second (TPS) and total processing time in the Gym.

## 🚀 Hugging Face Checklist

- [ ] Is the model loaded via `AutoModel` for flexibility?
- [ ] Is mixed precision enabled for production inference?
- [ ] Has the model been audited for biased emotional scoring?
- [ ] Is the inference latency under the 200ms threshold for real-time interaction?
- [ ] Are model weights stored outside of version control (use LFS or external storage)?
