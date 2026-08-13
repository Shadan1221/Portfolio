import os
import fitz # PyMuPDF

def convert_pdfs():
    base_dir = "d:/Portfolio/shadan-portfolio/public/certificates"
    thumb_dir = os.path.join(base_dir, "thumbnails")
    os.makedirs(thumb_dir, exist_ok=True)
    
    for sub in ["certifications", "hackathon"]:
        sub_path = os.path.join(base_dir, sub)
        if not os.path.exists(sub_path):
            continue
        for fname in os.listdir(sub_path):
            if fname.endswith(".pdf"):
                pdf_path = os.path.join(sub_path, fname)
                out_name = fname.replace(".pdf", ".png")
                out_path = os.path.join(thumb_dir, out_name)
                
                doc = fitz.open(pdf_path)
                page = doc.load_page(0) # first page
                pix = page.get_pixmap(dpi=150)
                pix.save(out_path)
                print(f"Generated thumbnail: {out_name}")

if __name__ == "__main__":
    convert_pdfs()
