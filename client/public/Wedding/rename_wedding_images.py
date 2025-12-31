#!/usr/bin/env python3
import argparse
from pathlib import Path
import re
import uuid
import sys

IMAGE_EXTS = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tif', '.tiff', '.heic'}


def natural_key(s: str):
    parts = re.split(r'(\d+)', s)
    return [int(p) if p.isdigit() else p.lower() for p in parts]


def rename_images(folder: Path, prefix: str = '', dry_run: bool = False):
    if not folder.exists() or not folder.is_dir():
        print(f"Folder not found: {folder}", file=sys.stderr)
        return 1

    files = [p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in IMAGE_EXTS]
    if not files:
        print("No image files found.")
        return 0

    files.sort(key=lambda p: natural_key(p.name))
    digits = len(str(len(files)))

    # First pass: temp rename to avoid name collisions
    temp_map = {}
    for p in files:
        temp_name = f".tmp_{uuid.uuid4().hex}{p.suffix.lower()}"
        temp_path = p.with_name(temp_name)
        temp_map[temp_path] = p
        if dry_run:
            print(f"[TEMP] {p.name} -> {temp_name}")
        else:
            p.rename(temp_path)

    # Second pass: final rename in ascending order
    for idx, temp_path in enumerate(sorted(temp_map.keys(), key=lambda x: natural_key(temp_map[x].name)), start=1):
        original = temp_map[temp_path]
        new_name = f"{prefix}{idx:0{digits}d}{temp_path.suffix.lower()}"
        new_path = folder / new_name
        if dry_run:
            print(f"[RENAME] {original.name} -> {new_name}")
        else:
            temp_path.rename(new_path)

    print(f"Renamed {len(files)} images in '{folder}'.")
    return 0


def main():
    default_folder = r"c:\Users\ORHAN\Downloads\LensCraftStudio\LensCraftStudio\client\public\Wedding"
    parser = argparse.ArgumentParser(description="Rename images in a folder into ascending order.")
    parser.add_argument("folder", nargs="?", default=default_folder, help="Target folder path")
    parser.add_argument("--prefix", "-p", default="", help="Optional filename prefix")
    parser.add_argument("--dry-run", action="store_true", help="Show actions without renaming")
    args = parser.parse_args()

    folder = Path(args.folder)
    return_code = rename_images(folder, prefix=args.prefix, dry_run=args.dry_run)
    sys.exit(return_code)


if __name__ == "__main__":
    main()