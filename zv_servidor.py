import os
from http.server import HTTPServer, BaseHTTPRequestHandler


TIPOS_MIME = {
    ".html": "text/html; charset=utf-8",
    ".css":  "text/css; charset=utf-8",
    ".js":   "application/javascript; charset=utf-8",
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".ico":  "image/x-icon",
}


class ZenithServer(BaseHTTPRequestHandler):

    def do_GET(self):
        # La raíz devuelve index.html
        if self.path == "/" or self.path == "":
            self.servir_archivo("index.html")
        else:
            nombre = self.path.lstrip("/").split("?")[0]
            self.servir_archivo(nombre)

    def servir_archivo(self, nombre):
        """Abre y envía un archivo al navegador."""
        try:
            ext = os.path.splitext(nombre)[1]
            tipo = TIPOS_MIME.get(ext, "application/octet-stream")
            with open(nombre, "rb") as f:
                contenido = f.read()
            self.send_response(200)
            self.send_header("Content-Type", tipo)
            self.send_header("Content-Length", str(len(contenido)))
            self.end_headers()
            self.wfile.write(contenido)
        except FileNotFoundError:
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(b"<h2>404 - Archivo no encontrado</h2>")

    def log_message(self, format, *args):
        print(f"  [{self.address_string()}] {format % args}")


# ─────────────────────────────────────────────
HOST   = "localhost"
PUERTO = 8000
# ─────────────────────────────────────────────

if _name_ == "_main_":
    servidor = HTTPServer((HOST, PUERTO), ZenithServer)
    print("=" * 46)
    print("  Zenith — Servidor iniciado correctamente")
    print(f"  Abrir en: http://{HOST}:{PUERTO}")
    print("  Presionar Ctrl+C para detener")
    print("=" * 46)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("\n  Servidor detenido.")
        servidor.server_close()