<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PitCrew AI — AC & CSP Optimizer</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #080c0f; --bg2: #0e1419; --bg3: #141c24;
  --border: #1f2d3a; --border2: #2a3d4f;
  --accent: #e8401c; --accent2: #f5a623;
  --text: #e8edf2; --text2: #7a9ab0; --text3: #3d5568;
  --green: #22c55e;
  --mono: 'JetBrains Mono', monospace;
  --sans: 'Barlow', sans-serif;
  --cond: 'Barlow Condensed', sans-serif;
}
body { background: var(--bg); color: var(--text); font-family: var(--sans); min-height: 100vh; overflow-x: hidden; }
body::before {
  content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 0;
  background-image: linear-gradient(rgba(232,64,28,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,64,28,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}
.wrap { position: relative; z-index: 1; max-width: 960px; margin: 0 auto; padding: 0 24px; }
header { border-bottom: 1px solid var(--border); padding: 18px 0; position: sticky; top: 0; background: rgba(8,12,15,0.92); backdrop-filter: blur(12px); z-index: 100; }
.header-inner { display: flex; align-items: center; justify-content: space-between; }
.logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
.logo-icon { width: 36px; height: 36px; background: var(--accent); border-radius: 6px; display: flex; align-items: center; justify-content: center; }
.logo-text { font-family: var(--cond); font-size: 22px; font-weight: 800; color: var(--text); letter-spacing: 0.05em; }
.logo-text span { color: var(--accent); }
.badge-header { font-family: var(--mono); font-size: 11px; color: var(--accent2); border: 1px solid rgba(245,166,35,0.3); padding: 4px 10px; border-radius: 4px; letter-spacing: 0.08em; }
.hero { padding: 64px 0 48px; text-align: center; }
.hero-eyebrow { font-family: var(--mono); font-size: 11px; color: var(--accent); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 16px; }
.hero h1 { font-family: var(--cond); font-size: clamp(42px,7vw,72px); font-weight: 800; line-height: 0.95; margin-bottom: 20px; }
.hero h1 em { color: var(--accent); font-style: normal; }
.hero p { font-size: 17px; color: var(--text2); max-width: 560px; margin: 0 auto; line-height: 1.6; }
.form-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-bottom: 32px; }
.form-section { padding: 28px 32px; border-bottom: 1px solid var(--border); }
.form-section:last-child { border-bottom: none; }
.section-label { font-family: var(--mono); font-size: 10px; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
.section-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
.field { display: flex; flex-direction: column; gap: 6px; }
.field label { font-size: 12px; color: var(--text2); font-weight: 500; }
.field select, .field input { background: var(--bg3); border: 1px solid var(--border2); border-radius: 6px; color: var(--text); font-family: var(--sans); font-size: 14px; padding: 10px 14px; outline: none; transition: border-color 0.2s; -webkit-appearance: none; }
.field select:focus, .field input:focus { border-color: var(--accent); }
.checkbox-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; }
.check-item { display: flex; align-items: center; gap: 10px; background: var(--bg3); border: 1px solid var(--border2); border-radius: 6px; padding: 10px 14px; cursor: pointer; transition: all 0.2s; }
.check-item.active { border-color: var(--accent); background: rgba(232,64,28,0.08); }
.check-item input { display: none; }
.check-dot { width: 16px; height: 16px; border-radius: 4px; border: 1.5px solid var(--border2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s; }
.check-item.active .check-dot { background: var(--accent); border-color: var(--accent); }
.check-dot::after { content: ''; width: 8px; height: 5px; border-left: 2px solid white; border-bottom: 2px solid white; transform: rotate(-45deg) translate(1px,-1px); display: none; }
.check-item.active .check-dot::after { display: block; }
.check-label { font-size: 13px; color: var(--text2); }
.check-item.active .check-label { color: var(--text); }
.priority-wrap { display: flex; align-items: center; gap: 16px; }
.priority-label { font-size: 12px; white-space: nowrap; }
.pl-left { color: var(--accent); } .pl-right { color: var(--green); }
input[type="range"] { flex: 1; -webkit-appearance: none; height: 4px; border-radius: 2px; outline: none; background: linear-gradient(90deg, var(--accent) var(--val,70%), var(--green) var(--val,70%)); }
input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--text); border: 2px solid var(--bg); cursor: pointer; }
.submit-area { padding: 24px 32px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
.submit-note { font-size: 12px; color: var(--text3); line-height: 1.5; }
.btn-main { background: var(--accent); color: white; border: none; border-radius: 8px; font-family: var(--cond); font-size: 18px; font-weight: 700; letter-spacing: 0.05em; padding: 14px 36px; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; white-space: nowrap; }
.btn-main:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(232,64,28,0.35); }
#loading-block { display: none; text-align: center; padding: 64px 0; }
.loader-ring { width: 48px; height: 48px; border: 3px solid var(--border2); border-top-color: var(--accent); border-radius: 50%; margin: 0 auto 20px; animation: spin 0.9s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.loader-steps { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; }
.loader-step { font-family: var(--mono); font-size: 12px; color: var(--text3); transition: color 0.3s; }
.loader-step.active { color: var(--accent2); }
.loader-step.done { color: var(--green); }
#results-block { display: none; }
.results-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 12px; }
.results-title { font-family: var(--cond); font-size: 28px; font-weight: 700; }
.results-meta { font-size: 12px; color: var(--text2); margin-top: 4px; }
.score-badge { display: flex; align-items: center; gap: 10px; background: var(--bg2); border: 1px solid var(--border); border-radius: 8px; padding: 10px 18px; }
.score-label { font-size: 12px; color: var(--text2); }
.score-val { font-family: var(--cond); font-size: 28px; font-weight: 700; color: var(--accent2); }
.advice-box { background: rgba(232,64,28,0.05); border: 1px solid rgba(232,64,28,0.2); border-radius: 8px; padding: 16px 20px; margin-bottom: 20px; font-size: 14px; color: var(--text2); line-height: 1.7; }
.result-section { background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin-bottom: 20px; }
.result-section-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; background: var(--bg3); border-bottom: 1px solid var(--border); }
.result-section-title { font-family: var(--cond); font-size: 16px; font-weight: 700; letter-spacing: 0.04em; display: flex; align-items: center; gap: 8px; }
.rsicon { width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; font-family: var(--mono); }
.icon-ac { background: rgba(232,64,28,0.15); color: var(--accent); }
.icon-csp { background: rgba(245,166,35,0.15); color: var(--accent2); }
.icon-cm { background: rgba(34,197,94,0.15); color: var(--green); }
.icon-fix { background: rgba(120,160,255,0.15); color: #7ab0ff; }
.btn-copy { background: transparent; border: 1px solid var(--border2); color: var(--text2); font-family: var(--mono); font-size: 11px; padding: 5px 12px; border-radius: 4px; cursor: pointer; transition: all 0.2s; letter-spacing: 0.06em; }
.btn-copy:hover { border-color: var(--text2); color: var(--text); }
.btn-copy.copied { border-color: var(--green); color: var(--green); }
.setting-row { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 12px; padding: 11px 20px; border-bottom: 1px solid var(--border); transition: background 0.15s; }
.setting-row:last-child { border-bottom: none; }
.setting-row:hover { background: rgba(255,255,255,0.02); }
.setting-name { font-size: 13px; color: var(--text2); }
.setting-value { font-family: var(--mono); font-size: 13px; font-weight: 500; text-align: right; }
.sv-good { color: var(--green); } .sv-warn { color: var(--accent2); } .sv-crit { color: var(--accent); } .sv-neutral { color: var(--text); }
.setting-tag { font-size: 10px; padding: 2px 7px; border-radius: 3px; letter-spacing: 0.06em; font-weight: 500; white-space: nowrap; }
.tag-perf { background: rgba(232,64,28,0.1); color: var(--accent); }
.tag-visual { background: rgba(245,166,35,0.1); color: var(--accent2); }
.tag-online { background: rgba(120,160,255,0.1); color: #7ab0ff; }
.tip-row { display: flex; gap: 14px; align-items: flex-start; padding: 14px 20px; border-bottom: 1px solid var(--border); }
.tip-row:last-child { border-bottom: none; }
.tip-num { font-family: var(--mono); font-size: 11px; color: var(--accent); background: rgba(232,64,28,0.1); width: 22px; height: 22px; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.tip-title { font-size: 14px; font-weight: 500; color: var(--text); margin-bottom: 4px; }
.tip-desc { font-size: 12px; color: var(--text2); line-height: 1.6; }
.reset-btn { display: block; width: 100%; background: transparent; border: 1px solid var(--border2); color: var(--text2); font-family: var(--cond); font-size: 15px; font-weight: 600; letter-spacing: 0.06em; padding: 12px; border-radius: 8px; cursor: pointer; margin: 0 0 48px; transition: all 0.2s; }
.reset-btn:hover { border-color: var(--text2); color: var(--text); }
#error-block { display: none; text-align: center; padding: 40px; background: var(--bg2); border: 1px solid rgba(232,64,28,0.3); border-radius: 12px; margin-bottom: 32px; }
#error-block p { color: var(--text2); margin-bottom: 16px; font-size: 14px; }
footer { border-top: 1px solid var(--border); padding: 24px 0; text-align: center; font-size: 12px; color: var(--text3); }
footer span { color: var(--accent); }
@media(max-width:640px) { .form-section { padding: 20px; } .submit-area { flex-direction: column; } .setting-row { grid-template-columns: 1fr auto; } .setting-tag { display: none; } }
</style>
</head>
<body>

<header>
  <div class="wrap header-inner">
    <div class="logo">
      <div class="logo-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
      </div>
      <span class="logo-text">PITCREW<span> AI</span></span>
    </div>
    <span class="badge-header">AC · CSP OPTIMIZER · BETA</span>
  </div>
</header>

<main class="wrap">
  <section class="hero">
    <p class="hero-eyebrow">Assetto Corsa + Custom Shaders Patch</p>
    <h1>Ajustes <em>perfectos</em><br>para tu PC</h1>
    <p>Introduce tu hardware y la IA genera la configuración óptima para AC y CSP. Sin adivinar, sin tutoriales de YouTube de 2017.</p>
  </section>

  <div id="form-block">
    <div class="form-card">
      <div class="form-section">
        <div class="section-label">Hardware</div>
        <div class="form-grid">
          <div class="field">
            <label>Tarjeta gráfica (GPU)</label>
            <select id="gpu">
              <option value="">— Selecciona GPU —</option>
              <optgroup label="NVIDIA RTX 40xx"><option>RTX 4090</option><option>RTX 4080</option><option>RTX 4070 Ti</option><option>RTX 4070</option><option>RTX 4060 Ti</option><option>RTX 4060</option></optgroup>
              <optgroup label="NVIDIA RTX 30xx"><option>RTX 3090</option><option>RTX 3080</option><option>RTX 3070</option><option>RTX 3060 Ti</option><option>RTX 3060</option></optgroup>
              <optgroup label="NVIDIA RTX 20xx"><option>RTX 2080 Ti</option><option>RTX 2080</option><option>RTX 2070</option><option>RTX 2060</option></optgroup>
              <optgroup label="NVIDIA GTX"><option>GTX 1080 Ti</option><option>GTX 1080</option><option>GTX 1070</option><option value="GTX 1060 6GB">GTX 1060 6GB</option><option>GTX 1060 3GB</option><option>GTX 1050 Ti</option></optgroup>
              <optgroup label="AMD RX 7xxx"><option>RX 7900 XTX</option><option>RX 7800 XT</option><option>RX 7700 XT</option><option>RX 7600</option></optgroup>
              <optgroup label="AMD RX 6xxx"><option>RX 6800 XT</option><option>RX 6700 XT</option><option>RX 6600 XT</option><option>RX 6600</option></optgroup>
              <option value="otro">Otra — escribir abajo</option>
            </select>
          </div>
          <div class="field">
            <label>Procesador (CPU)</label>
            <select id="cpu">
              <option value="">— Selecciona CPU —</option>
              <optgroup label="Intel Core 13/14ª gen"><option>i9-13900K</option><option>i7-13700K</option><option>i5-13600K</option></optgroup>
              <optgroup label="Intel Core 12ª gen"><option>i9-12900K</option><option>i7-12700K</option><option>i5-12600K</option></optgroup>
              <optgroup label="Intel Core 10/11ª gen"><option>i9-10900K</option><option>i7-10700K</option><option>i5-10600K</option></optgroup>
              <optgroup label="Intel Xeon"><option value="Xeon X5675">Xeon X5675</option><option>Xeon E5-2670</option><option>Xeon E5-2680</option><option>Xeon W3690</option></optgroup>
              <optgroup label="AMD Ryzen 7xxx"><option>Ryzen 9 7950X</option><option>Ryzen 9 7900X</option><option>Ryzen 7 7700X</option><option>Ryzen 5 7600X</option></optgroup>
              <optgroup label="AMD Ryzen 5xxx"><option>Ryzen 9 5900X</option><option>Ryzen 7 5800X</option><option>Ryzen 5 5600X</option></optgroup>
              <option value="otro">Otra — escribir abajo</option>
            </select>
          </div>
          <div class="field">
            <label>RAM instalada</label>
            <select id="ram">
              <option>8 GB</option><option>16 GB</option><option value="24 GB" selected>24 GB</option><option>32 GB</option><option>48 GB</option><option>64 GB</option>
            </select>
          </div>
        </div>
        <div style="margin-top:14px">
          <div class="field">
            <label>GPU o CPU personalizada (si seleccionaste "Otra")</label>
            <input type="text" id="custom-hw" placeholder="ej: GTX 970, Ryzen 5 3600...">
          </div>
        </div>
      </div>

      <div class="form-section">
        <div class="section-label">Pantalla & Resolución</div>
        <div class="form-grid">
          <div class="field">
            <label>Configuración de monitores</label>
            <select id="monitors">
              <option value="single_1080p">1 monitor — 1920×1080</option>
              <option value="single_1440p">1 monitor — 2560×1440</option>
              <option value="single_4k">1 monitor — 3840×2160 (4K)</option>
              <option value="triple_1080p">Triple pantalla — 5760×1080</option>
              <option value="triple_1440p">Triple pantalla — 7680×1440</option>
              <option value="ultrawide">Ultrawide — 3440×1440</option>
              <option value="vr">VR (Quest / Pimax...)</option>
            </select>
          </div>
          <div class="field">
            <label>FPS objetivo</label>
            <select id="fps">
              <option>60 FPS</option><option value="90 FPS" selected>90 FPS</option><option>120 FPS</option><option>144 FPS</option><option>165 FPS</option>
            </select>
          </div>
          <div class="field">
            <label>Disco del juego</label>
            <select id="storage">
              <option value="ssd_nvme">SSD NVMe</option>
              <option value="ssd_sata" selected>SSD SATA</option>
              <option value="hdd">HDD</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-section">
        <div class="section-label">Software & Uso</div>
        <div class="form-grid">
          <div class="field">
            <label>Versión de CSP</label>
            <select id="csp-ver">
              <option>0.1.79 (stable antiguo)</option>
              <option>0.2.3 (stable)</option>
              <option>Preview 2.10</option>
              <option value="Preview 2.11" selected>Preview 2.11</option>
              <option>Preview 2.12</option>
            </select>
          </div>
          <div class="field">
            <label>¿Usas Content Manager?</label>
            <select id="cm">
              <option value="yes" selected>Sí, uso CM</option>
              <option value="no">No, launcher original</option>
            </select>
          </div>
          <div class="field">
            <label>Tipo de uso</label>
            <select id="use-type">
              <option value="both" selected>Online + Offline</option>
              <option value="online">Solo online (LFM, RD...)</option>
              <option value="offline">Solo offline / hotlap</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-section">
        <div class="section-label">Problemas actuales</div>
        <div class="checkbox-grid">
          <label class="check-item active" onclick="toggleCheck(this)"><input type="checkbox" checked><div class="check-dot"></div><span class="check-label">Bajadas FPS en meta</span></label>
          <label class="check-item active" onclick="toggleCheck(this)"><input type="checkbox" checked><div class="check-dot"></div><span class="check-label">FPS inestables en LFM</span></label>
          <label class="check-item" onclick="toggleCheck(this)"><input type="checkbox"><div class="check-dot"></div><span class="check-label">Stuttering / micro-cortes</span></label>
          <label class="check-item" onclick="toggleCheck(this)"><input type="checkbox"><div class="check-dot"></div><span class="check-label">Texturas de baja calidad</span></label>
          <label class="check-item" onclick="toggleCheck(this)"><input type="checkbox"><div class="check-dot"></div><span class="check-label">Reflejo en coches feo</span></label>
          <label class="check-item" onclick="toggleCheck(this)"><input type="checkbox"><div class="check-dot"></div><span class="check-label">Luces o sombras raras</span></label>
          <label class="check-item" onclick="toggleCheck(this)"><input type="checkbox"><div class="check-dot"></div><span class="check-label">VRAM al límite</span></label>
          <label class="check-item" onclick="toggleCheck(this)"><input type="checkbox"><div class="check-dot"></div><span class="check-label">Lag con muchos coches</span></label>
        </div>
      </div>

      <div class="form-section">
        <div class="section-label">Prioridad</div>
        <p style="font-size:13px;color:var(--text2);margin-bottom:14px">¿Qué priorizas más en tu experiencia?</p>
        <div class="priority-wrap">
          <span class="priority-label pl-left">Rendimiento</span>
          <input type="range" id="priority" min="0" max="100" value="70" oninput="updateSlider(this)">
          <span class="priority-label pl-right">Visual</span>
        </div>
        <p id="priority-text" style="font-size:11px;color:var(--text3);margin-top:8px;text-align:center">70% rendimiento — perfil equilibrado</p>
      </div>

      <div class="submit-area">
        <p class="submit-note">La IA analizará tu hardware y generará<br>una config personalizada completa.</p>
        <button class="btn-main" onclick="runAnalysis()">ANALIZAR Y OPTIMIZAR →</button>
      </div>
    </div>
  </div>

  <div id="loading-block">
    <div class="loader-ring"></div>
    <p style="font-family:var(--cond);font-size:22px;font-weight:700;margin-bottom:8px">Analizando tu setup...</p>
    <p style="font-size:13px;color:var(--text2);margin-bottom:24px">La IA está calculando tu configuración óptima</p>
    <div class="loader-steps">
      <p class="loader-step" id="step-0">→ Evaluando límites de hardware</p>
      <p class="loader-step" id="step-1">→ Calculando ajustes de Assetto Corsa</p>
      <p class="loader-step" id="step-2">→ Optimizando CSP para tu GPU</p>
      <p class="loader-step" id="step-3">→ Generando fixes para problemas detectados</p>
      <p class="loader-step" id="step-4">→ Preparando el informe final</p>
    </div>
  </div>

  <div id="error-block">
    <p id="error-msg">Error al conectar con la IA. Inténtalo de nuevo.</p>
    <button class="btn-main" onclick="runAnalysis()">Reintentar</button>
  </div>

  <div id="results-block">
    <div class="results-header">
      <div>
        <p class="results-title">Configuración generada</p>
        <p class="results-meta" id="results-meta"></p>
      </div>
      <div class="score-badge">
        <span class="score-label">Compatibilidad</span>
        <span class="score-val" id="compat-score">—</span>
      </div>
    </div>
    <div class="advice-box" id="advice-box"></div>
    <div class="result-section">
      <div class="result-section-header">
        <div class="result-section-title"><div class="rsicon icon-ac">AC</div>Assetto Corsa — Video Settings</div>
        <button class="btn-copy" onclick="copySection('ac-rows','Assetto Corsa Video Settings')">COPIAR</button>
      </div>
      <div id="ac-rows"></div>
    </div>
    <div class="result-section">
      <div class="result-section-header">
        <div class="result-section-title"><div class="rsicon icon-csp">CSP</div>Custom Shaders Patch</div>
        <button class="btn-copy" onclick="copySection('csp-rows','Custom Shaders Patch')">COPIAR</button>
      </div>
      <div id="csp-rows"></div>
    </div>
    <div class="result-section">
      <div class="result-section-header">
        <div class="result-section-title"><div class="rsicon icon-cm">CM</div>Content Manager — Ajustes extra</div>
        <button class="btn-copy" onclick="copySection('cm-rows','Content Manager')">COPIAR</button>
      </div>
      <div id="cm-rows"></div>
    </div>
    <div class="result-section">
      <div class="result-section-header">
        <div class="result-section-title"><div class="rsicon icon-fix">!</div>Fixes para tus problemas</div>
      </div>
      <div id="fix-rows"></div>
    </div>
    <button class="reset-btn" onclick="resetForm()">← NUEVO ANÁLISIS</button>
  </div>
</main>

<footer>
  <div class="wrap">
    <p>PITCREW AI · <span>Beta</span> · Optimizador no oficial para Assetto Corsa y CSP</p>
  </div>
</footer>

<script>
// Fix browser back button
history.pushState(null, '', window.location.href);
window.addEventListener('popstate', () => {
  if (document.getElementById('results-block').style.display !== 'none') {
    resetForm();
    history.pushState(null, '', window.location.href);
  } else if (document.getElementById('loading-block').style.display !== 'none') {
    resetForm();
    history.pushState(null, '', window.location.href);
  }
});

function toggleCheck(el) { el.classList.toggle('active'); el.querySelector('input').checked = el.classList.contains('active'); }

function updateSlider(el) {
  el.style.setProperty('--val', el.value + '%');
  const v = parseInt(el.value);
  const t = v < 30 ? 'Máximo rendimiento — perfil competición' : v < 55 ? 'Rendimiento alto — perfil online' : v < 75 ? 'Equilibrado — balance visual/rendimiento' : 'Prioridad visual — máxima calidad';
  document.getElementById('priority-text').textContent = t;
}

function getFormData() {
  const monMap = { single_1080p:'1 monitor 1920x1080', single_1440p:'1 monitor 2560x1440', single_4k:'1 monitor 3840x2160', triple_1080p:'Triple pantalla 5760x1080', triple_1440p:'Triple pantalla 7680x1440', ultrawide:'Ultrawide 3440x1440', vr:'VR' };
  const problems = [...document.querySelectorAll('.check-item.active .check-label')].map(e => e.textContent);
  const custom = document.getElementById('custom-hw').value.trim();
  return {
    gpu: custom || document.getElementById('gpu').value || 'GPU desconocida',
    cpu: custom || document.getElementById('cpu').value || 'CPU desconocida',
    ram: document.getElementById('ram').value,
    monitors: monMap[document.getElementById('monitors').value] || document.getElementById('monitors').value,
    fps: document.getElementById('fps').value,
    storage: document.getElementById('storage').value,
    cspVer: document.getElementById('csp-ver').value,
    cm: document.getElementById('cm').value,
    useType: document.getElementById('use-type').value,
    priority: document.getElementById('priority').value,
    problems
  };
}

async function runAnalysis() {
  const d = getFormData();
  document.getElementById('form-block').style.display = 'none';
  document.getElementById('loading-block').style.display = 'block';
  document.getElementById('results-block').style.display = 'none';
  document.getElementById('error-block').style.display = 'none';

  let si = 0;
  const stepInt = setInterval(() => {
    if (si > 0) document.getElementById('step-'+(si-1)).className = 'loader-step done';
    if (si < 5) { document.getElementById('step-'+si).className = 'loader-step active'; si++; }
  }, 1000);

  const aiPrompt = `Eres un experto técnico en Assetto Corsa y Custom Shaders Patch. Genera una configuración optimizada.

HARDWARE:
- GPU: ${d.gpu}
- CPU: ${d.cpu}
- RAM: ${d.ram}
- Pantalla: ${d.monitors}
- FPS objetivo: ${d.fps}
- Almacenamiento: ${d.storage}
- CSP: ${d.cspVer}
- Content Manager: ${d.cm === 'yes' ? 'Sí' : 'No'}
- Uso: ${d.useType}
- Prioridad (0=rendimiento, 100=visual): ${d.priority}/100
- Problemas: ${d.problems.join(', ') || 'ninguno'}

Responde SOLO con JSON válido, sin texto extra ni markdown:
{
  "compat_score": "número 1-100",
  "advice": "análisis honesto 2-3 frases con cuello de botella principal",
  "ac_video": [{"name":"ajuste","value":"valor concreto","status":"good|warn|crit|neutral","tag":"perf|visual|online"}],
  "csp_settings": [{"name":"ajuste CSP","value":"valor concreto","status":"good|warn|crit|neutral","tag":"perf|visual|online"}],
  "cm_settings": [{"name":"ajuste CM","value":"valor concreto","status":"good|warn|crit|neutral","tag":"perf|visual|online"}],
  "fixes": [{"title":"título","desc":"explicación detallada de cómo aplicarlo"}]
}
Mínimo: 10 ajustes AC, 12 CSP, 5 CM, 5 fixes. Valores muy concretos.`;

  try {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: aiPrompt })
    });

    clearInterval(stepInt);
    for (let i = 0; i < 5; i++) document.getElementById('step-'+i).className = 'loader-step done';

    if (!res.ok) throw new Error('Error ' + res.status);

    const data = await res.json();
    const raw = data.result || '';
    const cfg = JSON.parse(raw.replace(/```json|```/g,'').trim());
    renderResults(cfg, d);

  } catch(e) {
    clearInterval(stepInt);
    document.getElementById('loading-block').style.display = 'none';
    document.getElementById('error-msg').textContent = 'Error: ' + e.message + '. Inténtalo de nuevo.';
    document.getElementById('error-block').style.display = 'block';
  }
}

function renderResults(cfg, d) {
  document.getElementById('loading-block').style.display = 'none';
  document.getElementById('compat-score').textContent = (cfg.compat_score || '?') + '%';
  document.getElementById('advice-box').textContent = cfg.advice || '';
  document.getElementById('results-meta').textContent = `${d.gpu} · ${d.cpu} · ${d.ram} · ${d.monitors} · CSP ${d.cspVer}`;
  const tagMap = { perf:'RENDIMIENTO', visual:'VISUAL', online:'ONLINE' };
  function renderRows(items, id) {
    document.getElementById(id).innerHTML = (items||[]).map(s =>
      `<div class="setting-row"><span class="setting-name">${s.name}</span><span class="setting-value sv-${s.status||'neutral'}">${s.value}</span><span class="setting-tag tag-${s.tag||'perf'}">${tagMap[s.tag]||'PERF'}</span></div>`
    ).join('');
  }
  renderRows(cfg.ac_video, 'ac-rows');
  renderRows(cfg.csp_settings, 'csp-rows');
  renderRows(cfg.cm_settings, 'cm-rows');
  document.getElementById('fix-rows').innerHTML = (cfg.fixes||[]).map((f,i) =>
    `<div class="tip-row"><div class="tip-num">${i+1}</div><div><p class="tip-title">${f.title}</p><p class="tip-desc">${f.desc}</p></div></div>`
  ).join('');
  document.getElementById('results-block').style.display = 'block';
  document.getElementById('results-block').scrollIntoView({ behavior:'smooth' });
}

function copySection(id, label) {
  const rows = document.querySelectorAll('#'+id+' .setting-row');
  let text = `=== ${label} ===\n`;
  rows.forEach(r => { text += `${r.querySelector('.setting-name').textContent}: ${r.querySelector('.setting-value').textContent}\n`; });
  navigator.clipboard.writeText(text);
}

function resetForm() {
  document.getElementById('results-block').style.display = 'none';
  document.getElementById('form-block').style.display = 'block';
  window.scrollTo({ top:0, behavior:'smooth' });
}
</script>
</body>
</html>
