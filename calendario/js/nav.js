(function () {
  const sheets = [
    { n: '01', href: '01-portada-el.html', t: 'Portada él' },
    { n: '02', href: '02-casillas-el.html', t: 'Casillas él' },
    { n: '03', href: '03-laterales-el.html', t: 'Laterales él' },
    { n: '04', href: '04-separadores-el.html', t: 'Separadores él' },
    { n: '05', href: '05-numeros-el.html', t: 'Números él' },
    { n: '06', href: '06-portada-ella.html', t: 'Portada ella' },
    { n: '07', href: '07-casillas-ella.html', t: 'Casillas ella' },
    { n: '08', href: '08-laterales-ella.html', t: 'Laterales ella' },
    { n: '09', href: '09-separadores-ella.html', t: 'Separadores ella' },
    { n: '10', href: '10-numeros-ella.html', t: 'Números ella' },
    { n: '11', href: '11-perspectiva-el.html', t: 'Perspectiva él' },
    { n: '12', href: '12-perspectiva-ella.html', t: 'Perspectiva ella' },
    { n: '13', href: '13-instrucciones.html', t: 'Instrucciones' },
    { n: '14', href: '14-medidas.html', t: 'Medidas' },
  ];

  const file = location.pathname.split('/').pop();
  const idx = sheets.findIndex((s) => s.href === file);
  const current = sheets[idx] || { n: '—', t: '' };

  const nav = document.createElement('nav');
  nav.className = 'sheet-nav no-print';
  nav.innerHTML = `
    <div>
      <a href="../index.html">← Todas las hojas</a>
      <span class="meta" style="margin-left:1rem">Hoja ${current.n} · ${current.t}</span>
    </div>
    <div style="display:flex;gap:0.6rem;align-items:center;flex-wrap:wrap">
      ${idx > 0 ? `<a href="${sheets[idx - 1].href}">‹ Anterior</a>` : ''}
      ${idx < sheets.length - 1 && idx >= 0 ? `<a href="${sheets[idx + 1].href}">Siguiente ›</a>` : ''}
      <button type="button" onclick="window.print()">Imprimir</button>
    </div>
  `;
  document.body.prepend(nav);
})();
