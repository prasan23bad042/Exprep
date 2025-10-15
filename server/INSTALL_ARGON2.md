# Installing Argon2 for Password Hashing

## Why Argon2?

We switched from bcrypt to argon2 because:
- **No 72-byte password limit** (bcrypt truncates passwords at 72 bytes)
- **More secure** - Winner of the Password Hashing Competition (2015)
- **Configurable memory hardness** - Better protection against GPU attacks
- **Modern standard** - Recommended by OWASP

## Installation

Run this command in your virtual environment:

```bash
pip install passlib[argon2]
```

Or install all dependencies:

```bash
pip install -r requirements.txt
```

## What Changed

1. **requirements.txt**: Changed from `passlib[bcrypt]` to `passlib[argon2]`
2. **routes/auth.py**: Updated `CryptContext` to use `argon2` instead of `bcrypt`
3. **models.py**: Removed password max_length restriction (was 15 chars)

## Password Requirements

- **Minimum**: 8 characters
- **Maximum**: Unlimited (no cap with argon2)
- **Security**: Argon2id algorithm with memory-hard properties

## Migration Notes

**Important**: Existing bcrypt hashes in the database will still work! Passlib automatically:
- Detects the hash type
- Verifies old bcrypt passwords correctly
- Re-hashes passwords with argon2 on next login (if configured)

No database migration needed! 🎉
