import os
from PIL import Image, ImageDraw

size = 512
img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
d = ImageDraw.Draw(img)

d.rounded_rectangle((0, 0, size - 1, size - 1), radius=110, fill=(37, 99, 235, 255))
d.rectangle((80, 260, 432, 350), fill=(250, 204, 21, 255))
d.rectangle((110, 110, 402, 175), fill=(255, 255, 255, 255))
d.rectangle((224, 110, 288, 400), fill=(255, 255, 255, 255))

os.makedirs("icons", exist_ok=True)
for s in [16, 32, 48, 128]:
    img.resize((s, s), Image.LANCZOS).save(f"icons/icon{s}.png")