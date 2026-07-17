import { useState, useEffect } from 'react'
import './App.css'

const TICKER_ITEMS = [
  { flag: 'r', html: <><b>EN VIVO:</b> entrevista con Dario Roldán tras la clasificación — arranca en instantes</> },
  { flag: 'y', html: <><b>ALERTA:</b> bandera amarilla en el sector 2 de Assen por trabajos de pista</> },
  { flag: 'b', html: <><b>Boxes:</b> Vortex GP confirma cambio de estrategia para la próxima fecha</> },
  { flag: 'g', html: <><b>Resultados:</b> clasificación oficial de MotoGP en Assen ya disponible</> },
  { flag: 'y', html: <><b>Rally:</b> se define el recorrido del Trans-Chaco 2026 con seis etapas</> },
  { flag: 'g', html: <><b>TC:</b> Achucarro extiende su liderato en la fecha 8 del certamen nacional</> },
]

const NAV_LINKS = [
  { href: '#envivo', label: 'EN VIVO' },
  { href: '#f1', label: 'FÓRMULA 1' },
  { href: '#tc', label: 'TC' },
  { href: '#motogp', label: 'MOTOGP' },
  { href: '#rally', label: 'RALLY' },
  { href: '#karting', label: 'KARTING' },
  { href: '#nacional', label: 'NACIONAL' },
  { href: '#resultados', label: 'RESULTADOS' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [clock, setClock] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const time = now.toLocaleTimeString('es-PY', { hour: '2-digit', minute: '2-digit', hour12: false })
      setClock(`Asunción · ${time}`)
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  const tickerLoop = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <>
      {/* UTILITY BAR */}
      <div className="util-bar">
        <div className="wrap">
          <div className="util-left">
            <span>{clock || 'Asunción'}</span>
          </div>
          <div className="util-right">
            <a href="#envivo" className="live-pill"><span className="dot"></span>EN VIVO</a>
            <a href="#">Boletín</a>
            <a href="#">Iniciar sesión</a>
          </div>
        </div>
      </div>

      {/* MASTHEAD */}
      <header className="masthead">
        <div className="wordmark">AP<span>E</span>X</div>
        <div className="tagline">Diario del Automovilismo — Fórmula 1 · TC · MotoGP · Rally · Karting</div>
      </header>

      {/* NAV */}
      <nav className="main-nav">
        <div className="wrap nav-inner">
          <button className="nav-toggle" onClick={() => setNavOpen((o) => !o)} aria-label="Abrir menú">☰</button>
          <div className={`nav-links${navOpen ? ' open' : ''}`}>
            {NAV_LINKS.map((link, i) => (
              <a key={link.href} href={link.href} className={i === 0 ? 'active' : ''} onClick={() => setNavOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
          <a href="#envivo" className="nav-live"><span className="dot"></span>VER EN VIVO</a>
        </div>
      </nav>

      {/* TICKER */}
      <div className="ticker-bar">
        <div className="ticker-label">Última hora</div>
        <div className="ticker-track-wrap">
          <div className="ticker-track">
            {tickerLoop.map((item, i) => (
              <div className="ticker-item" key={i}>
                <span className={`flag-dot ${item.flag}`}></span>
                {item.html}
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="wrap">

        {/* HERO */}
        <section className="hero-grid">
          <div className="hero-main">
            <span className="cat-tag"><span className="flag-dot g"></span>Fórmula 1</span>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1541773367336-d3f7b02c3f04?q=80&w=1400&auto=format&fit=crop"
                alt="Monoplaza de Fórmula 1 en pista"
              />
            </figure>
            <h1><a href="#">Roldán firma una remontada histórica y se lleva Silverstone bajo lluvia</a></h1>
            <p className="dek">
              Desde el puesto 11 en la largada, el piloto de Halcón Racing aprovechó dos entradas a boxes perfectas
              y una estrategia de neumáticos intermedios para quedarse con la victoria en la última vuelta.
            </p>
            <div className="byline">POR REDACCIÓN APEX · HACE 42 MIN · 6 MIN DE LECTURA</div>
          </div>

          <div className="side-list">
            <h2 className="mini-head">Últimas noticias</h2>

            <div className="side-item">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop" alt="Auto de rally en camino de tierra" />
              <div>
                <span className="cat-tag"><span className="flag-dot y"></span>Rally</span>
                <h3><a href="#">Confirman el recorrido 2026 del Rally Trans-Chaco: serán 1.800 km de especiales</a></h3>
              </div>
            </div>
            <div className="side-item">
              <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=400&auto=format&fit=crop" alt="Moto de carreras en curva" />
              <div>
                <span className="cat-tag"><span className="flag-dot g"></span>MotoGP</span>
                <h3><a href="#">Salcedo sorprende en la Q2 y saldrá segundo en Assen</a></h3>
              </div>
            </div>
            <div className="side-item">
              <img src="https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=400&auto=format&fit=crop" alt="Autos de Turismo Carretera en fila" />
              <div>
                <span className="cat-tag"><span className="flag-dot b"></span>TC</span>
                <h3><a href="#">Guaraní Racing presentó el nuevo chasis para la temporada nacional</a></h3>
              </div>
            </div>
            <div className="side-item">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400&auto=format&fit=crop" alt="Karting en pista" />
              <div>
                <span className="cat-tag"><span className="flag-dot y"></span>Karting</span>
                <h3><a href="#">El Rubén Rodríguez albergará la final del campeonato juvenil</a></h3>
              </div>
            </div>
          </div>
        </section>

        {/* EN VIVO */}
        <section id="envivo">
          <div className="section-head">
            <div className="section-title"><span className="bar"></span>En Vivo</div>
            <a className="section-more" href="#">Ver toda la grilla en vivo →</a>
          </div>

          <div className="live-section">
            <div className="live-grid">
              <div>
                <div className="player">
                  <div className="player-badge"><span className="dot"></span>EN VIVO</div>
                  <div className="viewers">4.812 espectadores</div>
                  <div className="play-btn"></div>
                </div>
                <div className="live-meta">
                  <h3>Boxes APEX: entrevista con Dario Roldán tras la clasificación</h3>
                  <p>
                    El piloto de Halcón Racing repasa la vuelta que le dio la pole en Assen y adelanta la estrategia
                    de neumáticos para la carrera de mañana. Transmisión con preguntas del público en el chat.
                  </p>
                </div>
              </div>

              <div>
                <div className="live-schedule">
                  <h4>Próximas transmisiones</h4>
                  <div className="sched-item">
                    <span className="sched-time">18:30</span>
                    <span className="sched-name">Rueda de prensa — Rally Trans-Chaco</span>
                    <span className="sched-tag">ENTREVISTA</span>
                  </div>
                  <div className="sched-item">
                    <span className="sched-time">20:00</span>
                    <span className="sched-name">Clasificación TC — Autódromo Ypacaraí</span>
                    <span className="sched-tag">CARRERA</span>
                  </div>
                  <div className="sched-item">
                    <span className="sched-time">22:15</span>
                    <span className="sched-name">Warm-up MotoGP Assen</span>
                    <span className="sched-tag">CARRERA</span>
                  </div>
                  <div className="sched-item">
                    <span className="sched-time">08:00</span>
                    <span className="sched-name">Debate: ¿quién gana el título de TC?</span>
                    <span className="sched-tag">PROGRAMA</span>
                  </div>
                </div>

                <div className="replay">
                  <h4>Repeticiones recientes</h4>
                  <div className="replay-grid">
                    <div className="replay-card">
                      <img src="https://images.unsplash.com/photo-1547245324-d777c6f05e80?q=80&w=400&auto=format&fit=crop" alt="Repetición entrevista de pit lane" />
                      <span className="replay-dur">12:04</span>
                      <span>Entrevista: Marco Villani post-carrera</span>
                    </div>
                    <div className="replay-card">
                      <img src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?q=80&w=400&auto=format&fit=crop" alt="Repetición vuelta rápida" />
                      <span className="replay-dur">08:47</span>
                      <span>Análisis: la vuelta rápida de Roldán</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT GRID */}
        <div className="content-grid">
          <div>
            {/* FORMULA 1 */}
            <section id="f1">
              <div className="section-head">
                <div className="section-title"><span className="bar"></span>Fórmula 1</div>
                <a className="section-more" href="#">Más de F1 →</a>
              </div>
              <div className="article-grid">
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=600&auto=format&fit=crop" alt="Boxes de Fórmula 1" />
                  <span className="cat-tag"><span className="flag-dot b"></span>Boxes</span>
                  <h3><a href="#">Vortex GP evalúa un cambio de motor para Kron antes de la próxima cita</a></h3>
                  <p>El equipo analiza si conviene asumir la penalización en grilla a cambio de mayor fiabilidad para el resto de la temporada.</p>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=600&auto=format&fit=crop" alt="Neumáticos de Fórmula 1" />
                  <span className="cat-tag"><span className="flag-dot y"></span>Alerta</span>
                  <h3><a href="#">La FIA investiga el desgaste irregular de neumáticos tras Silverstone</a></h3>
                  <p>Los comisarios pidieron muestras a los tres primeros equipos de la clasificación general.</p>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=600&auto=format&fit=crop" alt="Ingenieros en el muro de boxes" />
                  <span className="cat-tag"><span className="flag-dot g"></span>Carrera</span>
                  <h3><a href="#">Team Aurora suma su segundo podio consecutivo con Villani</a></h3>
                  <p>El resultado lo acerca a 18 puntos del líder del campeonato a falta de seis fechas.</p>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1573001622130-1ac6c9ce7ea9?q=80&w=600&auto=format&fit=crop" alt="Auto de carrera en el paddock" />
                  <span className="cat-tag"><span className="flag-dot b"></span>Mercado</span>
                  <h3><a href="#">Se acelera la novela de pases: tres asientos aún sin definir para 2027</a></h3>
                  <p>Al menos dos escuderías negocian en paralelo con los mismos pilotos jóvenes de la academia.</p>
                </article>
              </div>
            </section>

            {/* TC */}
            <section id="tc">
              <div className="section-head">
                <div className="section-title"><span className="bar"></span>Turismo Carretera</div>
                <a className="section-more" href="#">Más de TC →</a>
              </div>
              <div className="article-grid">
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop" alt="Autos de carrera en la largada" />
                  <span className="cat-tag"><span className="flag-dot g"></span>Carrera</span>
                  <h3><a href="#">Achucarro gana en Ypacaraí y se pone líder del certamen nacional</a></h3>
                  <p>Superó a Bareiro en la última curva tras un toque que generó polémica entre los comisarios deportivos.</p>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?q=80&w=600&auto=format&fit=crop" alt="Mecánicos trabajando en el motor" />
                  <span className="cat-tag"><span className="flag-dot b"></span>Boxes</span>
                  <h3><a href="#">Guaraní Racing suma un segundo auto para la temporada 2027</a></h3>
                  <p>El equipo confirmó la incorporación de un piloto juvenil surgido del karting nacional.</p>
                </article>
              </div>
            </section>

            {/* MOTOGP */}
            <section id="motogp">
              <div className="section-head">
                <div className="section-title"><span className="bar"></span>MotoGP</div>
                <a className="section-more" href="#">Más de MotoGP →</a>
              </div>
              <div className="article-grid">
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=600&auto=format&fit=crop" alt="Moto de carreras inclinada en curva" />
                  <span className="cat-tag"><span className="flag-dot g"></span>Carrera</span>
                  <h3><a href="#">Vittori domina la práctica libre 3 en un circuito mojado en Assen</a></h3>
                  <p>El italiano marcó el mejor tiempo con neumáticos de lluvia extrema a falta de la clasificación.</p>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop" alt="Piloto de moto en el pit lane" />
                  <span className="cat-tag"><span className="flag-dot y"></span>Alerta</span>
                  <h3><a href="#">Salcedo sufre una caída sin consecuencias en la Q1</a></h3>
                  <p>El piloto fue evaluado por el equipo médico y recibió el alta para disputar la Q2.</p>
                </article>
              </div>
            </section>

            {/* RALLY */}
            <section id="rally">
              <div className="section-head">
                <div className="section-title"><span className="bar"></span>Rally</div>
                <a className="section-more" href="#">Más de Rally →</a>
              </div>
              <div className="article-grid">
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop" alt="Auto de rally levantando polvo" />
                  <span className="cat-tag"><span className="flag-dot g"></span>Carrera</span>
                  <h3><a href="#">Así será el Rally Trans-Chaco 2026: fechas, tramos y transmisión</a></h3>
                  <p>La organización confirmó seis etapas con tramos nocturnos y un cierre en el Chaco central.</p>
                </article>
              </div>
            </section>

            {/* KARTING */}
            <section id="karting">
              <div className="section-head">
                <div className="section-title"><span className="bar"></span>Karting</div>
                <a className="section-more" href="#">Más de Karting →</a>
              </div>
              <div className="article-grid">
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop" alt="Karts en pista de competencia" />
                  <span className="cat-tag"><span className="flag-dot g"></span>Carrera</span>
                  <h3><a href="#">La categoría juvenil define su campeón el próximo fin de semana</a></h3>
                  <p>Tres pilotos llegan con chances matemáticas al Autódromo Rubén Rodríguez.</p>
                </article>
              </div>
            </section>

            {/* NACIONAL */}
            <section id="nacional">
              <div className="section-head">
                <div className="section-title"><span className="bar"></span>Nacional</div>
                <a className="section-more" href="#">Más de Nacional →</a>
              </div>
              <div className="cat-strip">
                <span className="cat-chip">TC Paraguayo</span>
                <span className="cat-chip">Rally Trans-Chaco</span>
                <span className="cat-chip">Autódromo Rubén Rodríguez</span>
                <span className="cat-chip">Autódromo Ypacaraí</span>
                <span className="cat-chip">Karting Juvenil</span>
              </div>
              <div className="article-grid" style={{ marginTop: '18px' }}>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=600&auto=format&fit=crop" alt="Autódromo con público en las tribunas" />
                  <span className="cat-tag"><span className="flag-dot b"></span>Nacional</span>
                  <h3><a href="#">Récord de público en el Autódromo Ypacaraí para la fecha 8</a></h3>
                  <p>Más de 12.000 personas siguieron la carrera que definió el segundo lugar del campeonato.</p>
                </article>
                <article className="card">
                  <img src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=600&auto=format&fit=crop" alt="Piloto celebrando en el podio" />
                  <span className="cat-tag"><span className="flag-dot g"></span>Resultados</span>
                  <h3><a href="#">Tabla de posiciones actualizada tras la octava fecha del TC nacional</a></h3>
                  <p>Achucarro extiende su ventaja a 22 puntos sobre Bareiro con cuatro carreras por disputarse.</p>
                </article>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside>
            <div className="widget">
              <h4><span className="bar"></span>Lo más leído</h4>
              <ol className="most-read">
                <li><span className="num">01</span><a href="#">Roldán firma una remontada histórica en Silverstone</a></li>
                <li><span className="num">02</span><a href="#">Confirman el recorrido del Rally Trans-Chaco 2026</a></li>
                <li><span className="num">03</span><a href="#">Achucarro gana en Ypacaraí y toma el liderato</a></li>
                <li><span className="num">04</span><a href="#">La FIA investiga el desgaste de neumáticos</a></li>
                <li><span className="num">05</span><a href="#">Salcedo sorprende y saldrá segundo en Assen</a></li>
              </ol>
            </div>

            <div className="widget" id="resultados">
              <h4><span className="bar"></span>Campeonato F1 — Pilotos</h4>
              <table className="standings">
                <thead>
                  <tr><th>Pos</th><th>Piloto</th><th>Equipo</th><th style={{ textAlign: 'right' }}>Pts</th></tr>
                </thead>
                <tbody>
                  <tr><td className="pos">1</td><td><span className="team-dot" style={{ background: 'var(--red)' }}></span>Roldán</td><td>Halcón</td><td className="pts">284</td></tr>
                  <tr><td className="pos">2</td><td><span className="team-dot" style={{ background: 'var(--blue)' }}></span>Villani</td><td>Aurora</td><td className="pts">266</td></tr>
                  <tr><td className="pos">3</td><td><span className="team-dot" style={{ background: 'var(--amber)' }}></span>Kron</td><td>Vortex GP</td><td className="pts">241</td></tr>
                  <tr><td className="pos">4</td><td><span className="team-dot" style={{ background: 'var(--green)' }}></span>Novak</td><td>Halcón</td><td className="pts">198</td></tr>
                  <tr><td className="pos">5</td><td><span className="team-dot" style={{ background: '#8b5cf6' }}></span>Watanabe</td><td>Aurora</td><td className="pts">177</td></tr>
                </tbody>
              </table>
            </div>

            <div className="widget">
              <h4><span className="bar"></span>Boletín</h4>
              <div className="newsletter-box">
                <strong style={{ fontFamily: 'var(--display)', fontSize: '16px' }}>La vuelta rápida, todos los días</strong>
                <p>Recibí el resumen del automovilismo nacional e internacional en tu correo, cada mañana.</p>
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input type="email" placeholder="tu@correo.com" required />
                  <button type="submit">{subscribed ? 'Listo ✓' : 'Suscribirme'}</button>
                </form>
              </div>
            </div>
          </aside>
        </div>

      </main>

      <div className="checker-strip"></div>

      {/* FOOTER */}
      <footer>
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="wordmark">AP<span>E</span>X</div>
            <p>El diario del automovilismo paraguayo e internacional. Fórmula 1, TC, MotoGP, Rally y karting, minuto a minuto y en vivo.</p>
            <div className="socials" style={{ marginTop: '16px' }}>
              <a href="#">X</a><a href="#">IG</a><a href="#">YT</a><a href="#">FB</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Categorías</h5>
            <a href="#f1">Fórmula 1</a>
            <a href="#tc">Turismo Carretera</a>
            <a href="#motogp">MotoGP</a>
            <a href="#rally">Rally</a>
          </div>
          <div className="footer-col">
            <h5>En vivo</h5>
            <a href="#envivo">Grilla de transmisiones</a>
            <a href="#envivo">Entrevistas</a>
            <a href="#envivo">Repeticiones</a>
          </div>
          <div className="footer-col">
            <h5>Nacional</h5>
            <a href="#nacional">TC Paraguayo</a>
            <a href="#nacional">Rally Trans-Chaco</a>
            <a href="#karting">Karting Juvenil</a>
          </div>
          <div className="footer-col">
            <h5>El diario</h5>
            <a href="#">Quiénes somos</a>
            <a href="#">Contacto</a>
            <a href="#">Publicidad</a>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 APEX — Diario del Automovilismo. Plantilla de demostración.</span>
          <span>Asunción, Paraguay</span>
        </div>
      </footer>
    </>
  )
}

export default App