const WA_NUMBER = "5492224606890";

const productos = [
  {
    nombre: "Mate Imperial Clásico",
    desc: "Mate de cuero natural con aro plateado. Acabado artesanal premium. Incluye bombilla.",
    badge: "Más vendido",
    foto: "assets/D_NQ_NP_2X_806093-MLA106932550773_022026-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Imperial Clásico"
  },
  {
    nombre: "Mate Imperial Dorado",
    desc: "Cuero curtido con terminación dorada. Ideal para regalo o uso diario con estilo.",
    badge: null,
    foto: "assets/D_NQ_NP_2X_681091-MLA81597909806_012025-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Imperial Dorado"
  },
  {
    nombre: "Mate Camionero Negro",
    desc: "Cuero grueso negro con costura reforzada. Diseñado para el uso en ruta. Porta-termo incluido.",
    badge: "Premium",
    foto: "assets/D_NQ_NP_2X_806093-MLA106932550773_022026-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Camionero Negro"
  },
  {
    nombre: "Mate Camionero Marrón",
    desc: "Clásico camionero en cuero marrón natural. Resistente y cómodo para el viaje largo.",
    badge: null,
    foto: "assets/D_NQ_NP_2X_677258-MLA84683338102_052025-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Camionero Marrón"
  },
  {
    nombre: "Set Stanley Verde",
    desc: "Mate Stanley original verde con termo a juego. El set más pedido para regalo.",
    badge: "Nuevo",
    foto: "assets/D_NQ_NP_2X_783989-MLA93840318048_102025-F.webp",
    waMsg: "Hola! quiero consultar por el Set Stanley Verde"
  },
  {
    nombre: "Set Stanley Negro",
    desc: "Combo Stanley negro premium con termo 1L, yerbera y azucarera. Presentación en caja.",
    badge: null,
    foto: "assets/D_NQ_NP_2X_974853-MLA99989463757_112025-F.webp",
    waMsg: "Hola! quiero consultar por el Set Stanley Negro"
  },
  {
    nombre: "Mate Térmico Plateado",
    desc: "Mate térmico de acero inoxidable. Mantiene la temperatura por horas. Incluye bombilla.",
    badge: null,
    foto: "assets/D_NQ_NP_2X_748043-MLA100040300277_122025-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Térmico Plateado"
  },
  {
    nombre: "Mate Personalizado River",
    desc: "Grabado láser con el escudo de River Plate. Caja premium incluida. Ideal para regalo.",
    badge: "Especial",
    foto: "assets/D_NQ_NP_2X_884743-MLA111455383067_052026-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Personalizado River"
  },
  {
    nombre: "Mate Personalizado AFA",
    desc: "Grabado láser con el escudo de la Selección Argentina. Presentación en caja premium.",
    badge: null,
    foto: "assets/D_NQ_NP_2X_848332-MLA91514064067_092025-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Personalizado AFA"
  },
  {
    nombre: "Mate Personalizado Boca",
    desc: "Grabado láser con el escudo de Boca Juniors. Caja premium incluida.",
    badge: null,
    foto: "assets/D_NQ_NP_2X_696092-MLA108236242994_032026-F.webp",
    waMsg: "Hola! quiero consultar por el Mate Personalizado Boca"
  },
  {
    nombre: "Kit Matero Completo",
    desc: "Mate + termo + yerbera + azucarera + bombilla. Todo lo que necesitás en un solo kit.",
    badge: "Oferta",
    foto: "assets/D_NQ_NP_2X_722860-MLA107250152835_022026-F.webp",
    waMsg: "Hola! quiero consultar por el Kit Matero Completo"
  },
  {
    nombre: "Bombilla Premium",
    desc: "Bombilla de alpaca con filtro de acero inoxidable. Compatible con todos los mates.",
    badge: null,
    foto: "assets/D_NQ_NP_2X_973152-MLA106892605528_022026-F.webp",
    waMsg: "Hola! quiero consultar por la Bombilla Premium"
  }
];

function renderProductos() {
  const grid = document.querySelector('.productos-grid');
  if (!grid) return;

  grid.innerHTML = productos.map(p => `
    <div class="producto-card">
      <div class="producto-img">
        ${p.badge ? `<div class="producto-badge">${p.badge}</div>` : ''}
        <img src="${p.foto}" alt="${p.nombre}"
          onerror="this.style.display='none'; this.parentElement.style.background='#2d4a2d';"
        >
      </div>
      <div class="producto-body">
        <div class="producto-nombre">${p.nombre}</div>
        <div class="producto-desc">${p.desc}</div>
        <div class="producto-footer">
          <div class="producto-precio">Consultar</div>
          <a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(p.waMsg)}"
             class="btn-pedir" target="_blank">Pedir por WA</a>
        </div>
      </div>
    </div>
  `).join('');
}

function enviarPedido() {
  const nombre    = document.querySelector('#campo-nombre').value.trim();
  const telefono  = document.querySelector('#campo-telefono').value.trim();
  const producto  = document.querySelector('#campo-producto').value;
  const cantidad  = document.querySelector('#campo-cantidad').value.trim();
  const provincia = document.querySelector('#campo-provincia').value.trim();
  const detalles  = document.querySelector('#campo-detalles').value.trim();

  if (!nombre || !producto) {
    alert('Por favor completá al menos tu nombre y el producto que te interesa.');
    return;
  }

  let msg = 'Hola! Quiero hacer un pedido desde la web.';
  if (nombre)    msg += `\n👤 Nombre: ${nombre}`;
  if (telefono)  msg += `\n📱 Teléfono: ${telefono}`;
  if (producto)  msg += `\n🧉 Producto: ${producto}`;
  if (cantidad)  msg += `\n📦 Cantidad: ${cantidad}`;
  if (provincia) msg += `\n📍 Provincia: ${provincia}`;
  if (detalles)  msg += `\n📝 Detalles: ${detalles}`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductos();
});