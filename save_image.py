#!/usr/bin/env python3
"""
Save profile image to portfolio public folder
Usage: python save_image.py <image_path>
"""
import sys
import shutil
from pathlib import Path

if len(sys.argv) < 2:
    print("Usage: python save_image.py <path_to_image>")
    print("Example: python save_image.py C:\\Users\\Admin\\Desktop\\photo.jpg")
    sys.exit(1)

source = Path(sys.argv[1])
if not source.exists():
    print(f"Error: Image file not found at {source}")
    sys.exit(1)

dest = Path("public/profile.jpg")
try:
    shutil.copy2(source, dest)
    print(f"✓ Profile image saved to {dest}")
    print("  The image will now appear in your hero section!")
except Exception as e:
    print(f"Error copying file: {e}")
    sys.exit(1)
