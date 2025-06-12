import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Accueil = (props) => {
  return (
    <>
      <div className="accueil-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="accueil-accueil">
          <div className="accueil-nav1">
            <div className="accueil-logo-nav">
              <div className="accueil-logo">
                <div className="accueil-group94">
                  <img
                    alt="Vector6659"
                    src="/external/vector6659-e14i.svg"
                    className="accueil-vector1"
                  />
                  <img
                    alt="Exclude6659"
                    src="/external/exclude6659-65m.svg"
                    className="accueil-exclude"
                  />
                  <img
                    alt="Vector6659"
                    src="/external/vector6659-qn7t.svg"
                    className="accueil-vector2"
                  />
                </div>
                <span className="accueil-text100">AndyK.app</span>
              </div>
              <div className="accueil-nav2">
                <span className="accueil-text101">Les parcours</span>
                <span className="accueil-text102">Les handicaps</span>
                <span className="accueil-text103">Le projet AndyKapp</span>
              </div>
            </div>
            <button className="accueil-button10">
              <span className="accueil-text104">Soutenir le projet</span>
            </button>
          </div>
          <div className="accueil-section-hero">
            <div className="accueil-frame146">
              <span className="accueil-text105">
                Andy K. à la découverte des handicaps dans le numérique.
              </span>
              <span className="accueil-text106">
                <span>
                  Mettez-vous dans la peau de notre explorateur numérique et
                  découvrez comment les personnes en situation de handicap
                  perçoivent et interagissent avec le web.
                </span>
                <br></br>
                <span>
                  Un parcours pour mieux comprendre les barrières du numérique.
                </span>
              </span>
              <div className="accueil-frame145">
                <button className="accueil-button11">
                  <span className="accueil-text110">Commencer l’aventure</span>
                </button>
                <button className="accueil-button12">
                  <span className="accueil-text111">
                    Plus d’infos le projet
                  </span>
                </button>
              </div>
            </div>
            <div className="accueil-heroimages">
              <img
                alt="imageHeroHandicaps16659"
                src="/external/imageherohandicaps16659-2pfr-700w.png"
                className="accueil-image-hero-handicaps1"
              />
              <img
                alt="imageHeroAndyK116659"
                src="/external/imageheroandyk116659-oq0d-200w.png"
                className="accueil-image-hero-andy-k11"
              />
            </div>
          </div>
          <div className="accueil-section-experience-immersive">
            <span className="accueil-text112">
              Une expérience immersive pour comprendre l&apos;importance de
              l&apos;accessibilité numérique.
            </span>
          </div>
          <div className="accueil-sectionparcours">
            <div className="accueil-frame147">
              <span className="accueil-text113">Les parcours</span>
              <span className="accueil-text114">
                Relevez ces défis pour comprendre les obstacles rencontrés par
                les personnes en situation de handicap
              </span>
            </div>
            <div className="accueil-cardsmissions">
              <div className="accueil-card-blue-border1">
                <div className="accueil-frame31">
                  <div className="accueil-frame210">
                    <div className="accueil-tag-troubles1">
                      <img
                        alt="eyeI6659"
                        src="/external/eyei6659-1u96.svg"
                        className="accueil-eye1"
                      />
                      <span className="accueil-text115">Troubles visuels</span>
                    </div>
                    <span className="accueil-text116">
                      Trouble de la perception des couleurs
                    </span>
                  </div>
                  <span className="accueil-text117">
                    Découvrez les difficultés rencontrées par les personnes
                    ayant des difficultés à percevoir et identifier les
                    couleurs.
                  </span>
                  <span className="accueil-text118">
                    Mission : identifier des éléments colorés
                  </span>
                </div>
                <button className="accueil-button13">
                  <span className="accueil-text119">Commencer le parcours</span>
                  <img
                    alt="arrowrightI6659"
                    src="/external/arrowrighti6659-lpv.svg"
                    className="accueil-arrowright1"
                  />
                </button>
              </div>
              <div className="accueil-card-blue-border2">
                <div className="accueil-frame32">
                  <div className="accueil-frame211">
                    <div className="accueil-tag-troubles2">
                      <img
                        alt="eyeI6659"
                        src="/external/eyei6659-899c.svg"
                        className="accueil-eye2"
                      />
                      <span className="accueil-text120">Troubles visuels</span>
                    </div>
                    <span className="accueil-text121">
                      Champ visuel restreint
                    </span>
                  </div>
                  <span className="accueil-text122">
                    Expérimentez les différents troubles du champ visuel et
                    comprenez l’impact de pathologies neurologiques ou
                    ophtalmologiques.
                  </span>
                  <span className="accueil-text123">
                    Mission : trouver une information spécifique avec un champ
                    de vision réduit.
                  </span>
                </div>
                <button className="accueil-button14">
                  <span className="accueil-text124">Commencer le parcours</span>
                  <img
                    alt="arrowrightI6659"
                    src="/external/arrowrighti6659-tl2o.svg"
                    className="accueil-arrowright2"
                  />
                </button>
              </div>
              <div className="accueil-card-blue-border3">
                <div className="accueil-frame33">
                  <div className="accueil-frame212">
                    <div className="accueil-tag-troubles3">
                      <img
                        alt="HandPalmI6659"
                        src="/external/handpalmi6659-ju5m.svg"
                        className="accueil-hand-palm"
                      />
                      <span className="accueil-text125">Troubles moteurs</span>
                    </div>
                    <span className="accueil-text126">Mouvements limités</span>
                  </div>
                  <span className="accueil-text127">
                    Expérimentez les défis d&apos;un handicap affectant la
                    précision des mouvements des membres supérieurs.
                  </span>
                  <span className="accueil-text128">
                    Mission : réaliser une tâche nécessitant des clics précis.
                  </span>
                </div>
                <button className="accueil-button15">
                  <span className="accueil-text129">Commencer le parcours</span>
                  <img
                    alt="arrowrightI6659"
                    src="/external/arrowrighti6659-zb8i.svg"
                    className="accueil-arrowright3"
                  />
                </button>
              </div>
              <div className="accueil-card-blue-border4">
                <div className="accueil-frame34">
                  <div className="accueil-frame213">
                    <div className="accueil-tag-troubles4">
                      <img
                        alt="BrainI6659"
                        src="/external/braini6659-up68.svg"
                        className="accueil-brain1"
                      />
                      <span className="accueil-text130">
                        Troubles intellectuels
                      </span>
                    </div>
                    <span className="accueil-text131">
                      Comprendre l’information
                    </span>
                  </div>
                  <span className="accueil-text132">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text133">
                    Mission : résumer un texte et valider un captcha.
                  </span>
                </div>
                <button className="accueil-button16">
                  <span className="accueil-text134">Commencer le parcours</span>
                  <img
                    alt="arrowrightI6659"
                    src="/external/arrowrighti6659-ile7.svg"
                    className="accueil-arrowright4"
                  />
                </button>
              </div>
              <div className="accueil-card-glow-shadow-multi-border1">
                <div className="accueil-frame35">
                  <div className="accueil-frame214">
                    <div className="accueil-frame961">
                      <div className="accueil-tag-troubles5">
                        <img
                          alt="BrainI6659"
                          src="/external/braini6659-qo0j.svg"
                          className="accueil-brain2"
                        />
                        <span className="accueil-text135">
                          Troubles cognitifs
                        </span>
                      </div>
                      <div className="accueil-tag-annonce1">
                        <div className="accueil-frame1021"></div>
                        <div className="accueil-frame215">
                          <span className="accueil-text136">NOUVEAU !</span>
                        </div>
                      </div>
                    </div>
                    <span className="accueil-text137">
                      Lire et compter avec les troubles DYS
                    </span>
                  </div>
                  <span className="accueil-text138">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text139">
                    Mission : résumer un texte et valider un captcha.
                  </span>
                </div>
                <button className="accueil-button17">
                  <span className="accueil-text140">Commencer le parcours</span>
                  <img
                    alt="arrowrightI6659"
                    src="/external/arrowrighti6659-vryc.svg"
                    className="accueil-arrowright5"
                  />
                </button>
              </div>
              <div className="accueil-card-blue-border5">
                <div className="accueil-frame36">
                  <div className="accueil-frame216">
                    <div className="accueil-tag-troubles6">
                      <img
                        alt="BrainI6659"
                        src="/external/braini6659-oqed.svg"
                        className="accueil-brain3"
                      />
                      <span className="accueil-text141">
                        Troubles cognitifs
                      </span>
                    </div>
                    <span className="accueil-text142">
                      Lorem ipsum dolor sit amet
                    </span>
                  </div>
                  <span className="accueil-text143">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                    ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    dolor sit amet
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text144">
                    Mission : lorem ipsum dolor sit amet lorem ipsum dolor sit
                    amet
                  </span>
                </div>
                <button className="accueil-button18">
                  <span className="accueil-text145">Commencer le parcours</span>
                  <img
                    alt="arrowrightI6659"
                    src="/external/arrowrighti6659-w61j.svg"
                    className="accueil-arrowright6"
                  />
                </button>
              </div>
              <div className="accueil-card-glow-shadow-multi-border2">
                <div className="accueil-frame37">
                  <div className="accueil-frame217">
                    <div className="accueil-frame962">
                      <div className="accueil-tag-troubles7">
                        <img
                          alt="eyeI6659"
                          src="/external/eyei6659-bct.svg"
                          className="accueil-eye3"
                        />
                        <span className="accueil-text146">
                          Troubles visuels
                        </span>
                      </div>
                      <div className="accueil-tag-annonce2">
                        <div className="accueil-frame1022"></div>
                        <div className="accueil-frame218">
                          <span className="accueil-text147">Bientôt !</span>
                        </div>
                      </div>
                    </div>
                    <span className="accueil-text148">
                      Trouble de la perception des couleurs
                    </span>
                  </div>
                  <span className="accueil-text149">
                    Découvrez les difficultés rencontrées par les personnes
                    ayant des difficultés à percevoir et identifier les
                    couleurs.
                  </span>
                  <span className="accueil-text150">
                    Mission : identifier des éléments colorés
                  </span>
                </div>
              </div>
              <div className="accueil-card-glow-shadow-multi-border3">
                <div className="accueil-frame38">
                  <div className="accueil-frame219">
                    <div className="accueil-frame963">
                      <div className="accueil-tag-troubles8">
                        <img
                          alt="EarI6659"
                          src="/external/eari6659-6nut.svg"
                          className="accueil-ear"
                        />
                        <span className="accueil-text151">
                          Troubles auditifs
                        </span>
                      </div>
                      <div className="accueil-tag-annonce3">
                        <div className="accueil-frame1023"></div>
                        <div className="accueil-frame220">
                          <span className="accueil-text152">Bientôt !</span>
                        </div>
                      </div>
                    </div>
                    <span className="accueil-text153">
                      Trouble de la perception des couleurs
                    </span>
                  </div>
                  <span className="accueil-text154">
                    Découvrez les difficultés rencontrées par les personnes
                    ayant des difficultés à percevoir et identifier les
                    couleurs.
                  </span>
                  <span className="accueil-text155">
                    Mission : identifier des éléments colorés
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="accueil-chiffresaccessbilit-section">
            <span className="accueil-text156">
              Pourquoi l’accessibilité numérique est importante ?
            </span>
            <div className="accueil-leschiffres">
              <div className="accueil-card-multi-light-border-multi-bg1">
                <span className="accueil-text157">18 millions</span>
                <span className="accueil-text158">
                  <span className="accueil-text159">de personnes</span>
                  <span className="accueil-text160">
                    {' '}
                    de plus de 5 ans
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text161">
                    vivent avec un handicap
                  </span>
                  <span> en France</span>
                </span>
              </div>
              <div className="accueil-card-multi-light-border-multi-bg2">
                <span className="accueil-text163">5%</span>
                <span className="accueil-text164">
                  <span className="accueil-text165">
                    des
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text166">
                    enfants et adolescents
                  </span>
                  <span>
                    {' '}
                    sont diagnostiqués avec un trouble du neuro-développement.
                  </span>
                </span>
              </div>
              <div className="accueil-card-multi-light-border-multi-bg3">
                <span className="accueil-text168">9%</span>
                <span className="accueil-text169">
                  <span className="accueil-text170">des sites controlés</span>
                  <span className="accueil-text171">
                    {' '}
                    déclarent être
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text172">
                    partiellement conformes au RGAA
                  </span>
                  <span>, 0,37% totalement conformes</span>
                </span>
              </div>
            </div>
          </div>
          <div className="accueil-section-garantir-acces-info">
            <span className="accueil-text174">
              Garantir l’accès à l’information
            </span>
            <div className="accueil-frame149">
              <img
                alt="alternatives16659"
                src="/external/alternatives16659-kh4s-600w.png"
                className="accueil-alternatives1"
              />
              <div className="accueil-frame148">
                <span className="accueil-text175">
                  <span className="accueil-text176">
                    Cette interface n’est
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text177">
                    pour le moment pas accessible à toutes les personnes en
                    situation de handicap
                  </span>
                  <span className="accueil-text178">
                    {' '}
                    et nous nous en excusons.
                  </span>
                  <br></br>
                  <span className="accueil-text180">
                    Ce projet a pour but de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text181">
                    sensibiliser, en premier lieu, les personnes à priori
                    “non-concernées” par le handicap
                  </span>
                  <span className="accueil-text182">
                    , aux différentes barrières que l’on peut trouver en ligne.
                  </span>
                  <br></br>
                  <span className="accueil-text184">
                    Pour cette raison, nous avons préféré sortir
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text185">
                    une première version de l’interface non-optimisée pour les
                    lecteurs d’écran
                  </span>
                  <span className="accueil-text186">
                    , afin de commencer plus rapidement la sensibilisation du
                    public.
                  </span>
                  <br></br>
                  <span className="accueil-text188">
                    Cependant afin de permettre à tous de profiter de ce
                    contenu, nous avons mis à disposition
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="accueil-text189">
                    un document (Google docs) disponible au téléchargement via
                    Google Drive
                  </span>
                  <span className="accueil-text190">
                    , décrivant les différents parcours initiatiques proposés.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Ouverture du lien dans un nouvel onglet.</span>
                </span>
                <button className="accueil-button19">
                  <span className="accueil-text193">
                    Accéder au document (8Ko)
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="accueil-sectionprojet-benevole">
            <span className="accueil-text194">Un projet bénévole</span>
            <div className="accueil-frame143">
              <span className="accueil-text195">
                <span className="accueil-text196">
                  Ce projet est porté par
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="accueil-text197">Félix</span>
                <span className="accueil-text198">
                  , designer de solutions, et
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="accueil-text199">Anaïs</span>
                <span>
                  , UX UI designer en situation de handicap, et notre envie
                  commune de sensibiliser, transmettre et faire bouger les
                  lignes (de code).
                </span>
                <br></br>
                <span>
                  Nous ne tirons aucun revenu de ce projet, mais vos soutiens
                  sont précieux pour :
                </span>
              </span>
              <div className="accueil-frame114">
                <div className="accueil-argument01">
                  <img
                    alt="Ellipse156659"
                    src="/external/ellipse156659-uvz-200h.png"
                    className="accueil-ellipse15"
                  />
                  <span className="accueil-text203">
                    Rendre le site plus accessible
                  </span>
                </div>
                <div className="accueil-argument02">
                  <img
                    alt="Vector6659"
                    src="/external/vector6659-uhbe.svg"
                    className="accueil-vector3"
                  />
                  <span className="accueil-text204">
                    Faire grandir le projet
                  </span>
                </div>
                <div className="accueil-argument03">
                  <img
                    alt="Vector6659"
                    src="/external/vector6659-tutm.svg"
                    className="accueil-vector4"
                  />
                  <span className="accueil-text205">
                    Sensibiliser plus de monde
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="accueil-section-nous-aider">
            <span className="accueil-text206">Comment nous aider ?</span>
            <div className="accueil-cards-nous-aider">
              <div className="accueil-ligne01">
                <div className="accueil-card-glow-shadow-multi-border4">
                  <img
                    alt="faireUnDon16659"
                    src="/external/faireundon16659-6fyg-300h.png"
                    className="accueil-faire-un-don1"
                  />
                  <div className="accueil-frame1191">
                    <div className="accueil-frame1221">
                      <span className="accueil-text207">Faire un don</span>
                      <span className="accueil-text208">
                        <span className="accueil-text209">
                          Pour nous aider à payer le
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="accueil-text210">nom de domaine</span>
                        <span className="accueil-text211">
                          , payer des
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="accueil-text212">
                          intervenants experts accessibilité
                        </span>
                        <span className="accueil-text213">
                          {' '}
                          (développeurs, sous-titreurs, auditeurs ...), ajouter
                          des fonctionnalités pour
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="accueil-text214">
                          faire évoluer l’expérience.
                        </span>
                      </span>
                    </div>
                    <div className="accueil-frame921">
                      <button className="accueil-button20">
                        <img
                          alt="giftI6659"
                          src="/external/gifti6659-ktmo.svg"
                          className="accueil-gift"
                        />
                        <span className="accueil-text215">
                          Accéder à la cagnotte Teepee
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="accueil-card-glow-shadow-multi-border5">
                  <img
                    alt="partagerSite16659"
                    src="/external/partagersite16659-qurm-300h.png"
                    className="accueil-partager-site1"
                  />
                  <div className="accueil-frame1192">
                    <div className="accueil-frame1222">
                      <span className="accueil-text216">Partager le site</span>
                      <span className="accueil-text217">
                        <span className="accueil-text218">
                          Si tu as apprécié l’expérience ou appris des choses,
                          si tu penses que cela peut intéresser tes proches, ou
                          juste pour nous soutenir, partage ce site autour de
                          toi.
                        </span>
                        <br></br>
                        <span>
                          Car c’est en sensibilisant à grande échelle qu’on
                          changera les choses.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accueil-ligne02">
                <div className="accueil-card-glow-shadow-multi-border6">
                  <img
                    alt="diffuserProfils16659"
                    src="/external/diffuserprofils16659-j2v5j-300h.png"
                    className="accueil-diffuser-profils1"
                  />
                  <div className="accueil-frame1193">
                    <div className="accueil-frame1223">
                      <span className="accueil-text221">
                        Diffuser nos profils
                      </span>
                      <span className="accueil-text222">
                        <span className="accueil-text223">
                          Que ce soit pour intervenir dans votre structure pour
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="accueil-text224">
                          sensibiliser vos équipes
                        </span>
                        <span className="accueil-text225">
                          , ou parce que vous connaissez quelqu’un qui connait
                          quelqu’un qui
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="accueil-text226">
                          cherche, un designer de solutions
                        </span>
                        <span>
                          {' '}
                          (#productDesignerGraphique360) pour un projet
                          Freelance ou un poste en CDI.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="accueil-card-glow-shadow-multi-border7">
                  <img
                    alt="AndyKDev16659"
                    src="/external/andykdev16659-riqn-300h.png"
                    className="accueil-andy-k-dev1"
                  />
                  <div className="accueil-frame1194">
                    <div className="accueil-frame1224">
                      <span className="accueil-text228">
                        Mettre la main à la pâte
                      </span>
                      <span className="accueil-text229">
                        <span className="accueil-text230">
                          Tu es un
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="accueil-text231">
                          maestro du code option accessibilité numérique
                        </span>
                        <span>
                          {' '}
                          ou tu en connais un ? Tu souhaites participer à ce
                          projet pour le faire grandir en le rendant vraiment
                          accessible au plus grand nombre ?
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <div className="accueil-frame922">
                      <button className="accueil-button21">
                        <img
                          alt="envelopeI6659"
                          src="/external/envelopei6659-7cj.svg"
                          className="accueil-envelope"
                        />
                        <span className="accueil-text233">
                          Contacte-nous par mail
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accueil-footer"></div>
        </div>
      </div>
      <style jsx>
        {`
          .accueil-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .accueil-accueil {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-nav1 {
            gap: 120px;
            width: 1440px;
            height: 80px;
            display: flex;
            padding: 0 80px;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
            background-color: var(--dl-color-neutral-white);
          }
          .accueil-logo-nav {
            gap: 120px;
            display: flex;
            align-items: center;
          }
          .accueil-logo {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .accueil-group94 {
            width: 42px;
            height: 32.00005340576172px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .accueil-vector1 {
            top: 17.632545471191406px;
            left: 11.428496360778809px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .accueil-exclude {
            top: 0px;
            left: 0px;
            width: 42px;
            height: 32px;
            position: absolute;
          }
          .accueil-vector2 {
            top: 17.632545471191406px;
            left: 18.938676834106445px;
            width: 3px;
            height: 3px;
            position: absolute;
          }
          .accueil-text100 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 24px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-nav2 {
            gap: 40px;
            display: flex;
            align-items: center;
          }
          .accueil-text101 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text102 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text103 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button10 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            justify-content: center;
          }
          .accueil-text104 {
            color: var(--dl-color-blue-main);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-section-hero {
            gap: 33px;
            width: 1440px;
            display: flex;
            padding: 80px;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .accueil-frame146 {
            gap: 40px;
            width: 632px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-text105 {
            color: rgba(44, 36, 30, 1);
            width: 591px;
            height: auto;
            font-size: 40px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text106 {
            color: rgba(44, 36, 30, 1);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-frame145 {
            gap: 24px;
            display: flex;
            align-items: center;
          }
          .accueil-button11 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text110 {
            color: rgba(248, 250, 252, 1);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button12 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 6px;
            justify-content: center;
          }
          .accueil-text111 {
            color: var(--dl-color-blue-main);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-heroimages {
            width: 615px;
            height: 380px;
            display: flex;
            position: relative;
            align-items: center;
            flex-shrink: 0;
          }
          .accueil-image-hero-handicaps1 {
            top: 34px;
            left: 0px;
            width: 615px;
            height: 298px;
            position: absolute;
          }
          .accueil-image-hero-andy-k11 {
            top: 0px;
            left: 225.5px;
            width: 164px;
            height: 380px;
            position: absolute;
          }
          .accueil-section-experience-immersive {
            gap: 8px;
            height: 100px;
            display: flex;
            padding: 32px 227px;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-blue-main);
          }
          .accueil-text112 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 24px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-sectionparcours {
            gap: 40px;
            display: flex;
            padding: 48px 80px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/external/tq_erbuktzrgj-tu3w-1500w.png');
          }
          .accueil-frame147 {
            gap: 24px;
            width: 632px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-text113 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text114 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-cardsmissions {
            gap: 31px;
            display: grid;
            max-width: 1280px;
            flex-shrink: 0;
            place-items: start center;
            grid-template-columns: 1fr 1fr 1fr;
          }
          .accueil-card-blue-border1 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame31 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .accueil-frame210 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-tag-troubles1 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-yellow-100);
          }
          .accueil-eye1 {
            width: 16px;
            height: 16px;
          }
          .accueil-text115 {
            color: var(--dl-color-yellow-800);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text116 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text117 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text118 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button13 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text119 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-arrowright1 {
            width: 24px;
            height: 24px;
          }
          .accueil-card-blue-border2 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame32 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .accueil-frame211 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-tag-troubles2 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-yellow-100);
          }
          .accueil-eye2 {
            width: 16px;
            height: 16px;
          }
          .accueil-text120 {
            color: var(--dl-color-yellow-800);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text121 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text122 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text123 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button14 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text124 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-arrowright2 {
            width: 24px;
            height: 24px;
          }
          .accueil-card-blue-border3 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame33 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .accueil-frame212 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-tag-troubles3 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-pink-100);
          }
          .accueil-hand-palm {
            width: 16px;
            height: 16px;
          }
          .accueil-text125 {
            color: var(--dl-color-pink-800);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text126 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text127 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text128 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button15 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text129 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-arrowright3 {
            width: 24px;
            height: 24px;
          }
          .accueil-card-blue-border4 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame34 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .accueil-frame213 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-tag-troubles4 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: rgba(243, 232, 255, 1);
          }
          .accueil-brain1 {
            width: 16px;
            height: 16px;
          }
          .accueil-text130 {
            color: var(--dl-color-purple-800);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text131 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text132 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text133 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button16 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text134 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-arrowright4 {
            width: 24px;
            height: 24px;
          }
          .accueil-card-glow-shadow-multi-border1 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame35 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .accueil-frame214 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-frame961 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .accueil-tag-troubles5 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: rgba(243, 232, 255, 1);
          }
          .accueil-brain2 {
            width: 16px;
            height: 16px;
          }
          .accueil-text135 {
            color: var(--dl-color-purple-800);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-tag-annonce1 {
            width: 112px;
            height: 37px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .accueil-frame1021 {
            gap: 8px;
            top: 6px;
            left: 6px;
            width: 100px;
            height: 25px;
            display: flex;
            padding: 8px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 32px;
          }
          .accueil-frame215 {
            gap: 4px;
            top: 4px;
            left: 4px;
            width: 104px;
            display: flex;
            padding: 4px 16px;
            position: absolute;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-neutral-black);
          }
          .accueil-text136 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text137 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text138 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text139 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button17 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text140 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-arrowright5 {
            width: 24px;
            height: 24px;
          }
          .accueil-card-blue-border5 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame36 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            margin-bottom: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
          }
          .accueil-frame216 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-tag-troubles6 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: rgba(243, 232, 255, 1);
          }
          .accueil-brain3 {
            width: 16px;
            height: 16px;
          }
          .accueil-text141 {
            color: var(--dl-color-purple-800);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text142 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text143 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text144 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-button18 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text145 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-arrowright6 {
            width: 24px;
            height: 24px;
          }
          .accueil-card-glow-shadow-multi-border2 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame37 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-frame217 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-frame962 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .accueil-tag-troubles7 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-yellow-100);
          }
          .accueil-eye3 {
            width: 16px;
            height: 16px;
          }
          .accueil-text146 {
            color: var(--dl-color-yellow-800);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-tag-annonce2 {
            width: 105px;
            height: 37px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .accueil-frame1022 {
            gap: 8px;
            top: 6px;
            left: 6px;
            width: 93px;
            height: 25px;
            display: flex;
            padding: 8px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 32px;
          }
          .accueil-frame218 {
            gap: 4px;
            top: 4px;
            left: 4px;
            width: 97px;
            display: flex;
            padding: 4px 16px;
            position: absolute;
            align-self: stretch;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-neutral-black);
          }
          .accueil-text147 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text148 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text149 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text150 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-card-glow-shadow-multi-border3 {
            width: 406px;
            height: 100%;
            display: flex;
            padding: 24px;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            justify-content: space-between;
            background-color: rgba(248, 249, 248, 0.800000011920929);
          }
          .accueil-frame38 {
            gap: 16px;
            width: 358px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-frame219 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-frame963 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .accueil-tag-troubles8 {
            gap: 4px;
            display: flex;
            padding: 4px 8px;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-blue-100);
          }
          .accueil-ear {
            width: 16px;
            height: 16px;
          }
          .accueil-text151 {
            color: rgba(28, 57, 142, 1);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-tag-annonce3 {
            width: 105px;
            height: 37px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .accueil-frame1023 {
            gap: 8px;
            top: 6px;
            left: 6px;
            width: 93px;
            height: 25px;
            display: flex;
            padding: 8px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 32px;
          }
          .accueil-frame220 {
            gap: 4px;
            top: 4px;
            left: 4px;
            width: 97px;
            display: flex;
            padding: 4px 16px;
            position: absolute;
            align-self: stretch;
            align-items: center;
            border-radius: 24px;
            justify-content: flex-end;
            background-color: var(--dl-color-neutral-black);
          }
          .accueil-text152 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 14px;
            font-style: Regular;
            text-align: right;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text153 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text154 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text155 {
            color: var(--dl-color-neutral-600);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-chiffresaccessbilit-section {
            gap: 48px;
            display: flex;
            padding: 48px 80px 64px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-blue-main);
          }
          .accueil-text156 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-leschiffres {
            gap: 40px;
            display: flex;
            max-width: 1063px;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .accueil-card-multi-light-border-multi-bg1 {
            gap: 8px;
            width: 33%;
            display: flex;
            padding: 24px 16px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-text157 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text158 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text159 {
            font-weight: 700;
          }
          .accueil-text160 {
            font-weight: 400;
          }
          .accueil-text161 {
            font-weight: 700;
          }
          .accueil-card-multi-light-border-multi-bg2 {
            gap: 8px;
            width: 33%;
            display: flex;
            padding: 24px 16px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-text163 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text164 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text165 {
            font-weight: 400;
          }
          .accueil-text166 {
            font-weight: 700;
          }
          .accueil-card-multi-light-border-multi-bg3 {
            gap: 8px;
            width: 33%;
            display: flex;
            padding: 24px 16px;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            flex-direction: column;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-text168 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text169 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text170 {
            font-weight: 700;
          }
          .accueil-text171 {
            font-weight: 400;
          }
          .accueil-text172 {
            font-weight: 700;
          }
          .accueil-section-garantir-acces-info {
            gap: 40px;
            width: 1440px;
            display: flex;
            padding: 48px 80px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-text174 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-frame149 {
            gap: 103px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .accueil-alternatives1 {
            width: 545px;
            height: 365px;
          }
          .accueil-frame148 {
            gap: 40px;
            width: 632px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-text175 {
            color: rgba(44, 36, 30, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text176 {
            font-weight: 400;
          }
          .accueil-text177 {
            font-weight: 700;
          }
          .accueil-text178 {
            font-weight: 400;
          }
          .accueil-text180 {
            font-weight: 400;
          }
          .accueil-text181 {
            font-weight: 700;
          }
          .accueil-text182 {
            font-weight: 400;
          }
          .accueil-text184 {
            font-weight: 400;
          }
          .accueil-text185 {
            font-weight: 700;
          }
          .accueil-text186 {
            font-weight: 400;
          }
          .accueil-text188 {
            font-weight: 400;
          }
          .accueil-text189 {
            font-weight: 700;
          }
          .accueil-text190 {
            color: var(--dl-color-neutral-black);
          }
          .accueil-button19 {
            gap: 6px;
            height: 44px;
            display: flex;
            padding: 0 32px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
            background-color: var(--dl-color-default-grad02);
          }
          .accueil-text193 {
            color: var(--dl-color-neutral-white);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-sectionprojet-benevole {
            gap: 40px;
            width: 1440px;
            display: flex;
            padding: 48px 80px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-text194 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-frame143 {
            gap: 32px;
            width: 848px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-text195 {
            color: rgba(44, 36, 30, 1);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text196 {
            color: var(--dl-color-neutral-black);
            font-weight: 400;
            text-decoration: NONE;
          }
          .accueil-text197 {
            color: var(--dl-color-blue-main);
            font-weight: 700;
            text-decoration: UNDERLINE;
          }
          .accueil-text198 {
            color: var(--dl-color-neutral-black);
            font-weight: 400;
            text-decoration: NONE;
          }
          .accueil-text199 {
            color: var(--dl-color-blue-main);
            font-weight: 700;
            text-decoration: UNDERLINE;
          }
          .accueil-frame114 {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .accueil-argument01 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .accueil-ellipse15 {
            width: 32px;
            height: 32px;
          }
          .accueil-text203 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-argument02 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .accueil-vector3 {
            width: 32px;
            height: 32px;
          }
          .accueil-text204 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-argument03 {
            gap: 8px;
            display: flex;
            align-items: center;
          }
          .accueil-vector4 {
            width: 32px;
            height: 32px;
          }
          .accueil-text205 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 18px;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-section-nous-aider {
            gap: 40px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 48px 80px 64px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .accueil-text206 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 32px;
            align-self: stretch;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-cards-nous-aider {
            gap: 24px;
            display: flex;
            max-width: 1280px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-ligne01 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .accueil-card-glow-shadow-multi-border4 {
            gap: 8px;
            display: flex;
            padding: 16px 16px 1px 1px;
            align-items: flex-start;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-faire-un-don1 {
            width: 172px;
            height: 204px;
          }
          .accueil-frame1191 {
            gap: 8px;
            width: 420px;
            display: flex;
            padding: 0 0 8px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-frame1221 {
            gap: 8px;
            display: flex;
            padding: 0 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-text207 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text208 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text209 {
            font-weight: 400;
          }
          .accueil-text210 {
            font-weight: 700;
          }
          .accueil-text211 {
            font-weight: 400;
          }
          .accueil-text212 {
            font-weight: 700;
          }
          .accueil-text213 {
            font-weight: 400;
          }
          .accueil-text214 {
            font-weight: 700;
          }
          .accueil-frame921 {
            gap: 10px;
            height: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .accueil-button20 {
            gap: 6px;
            height: 36px;
            display: flex;
            padding: 0 12px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
          }
          .accueil-gift {
            width: 20px;
            height: 20px;
          }
          .accueil-text215 {
            color: var(--dl-color-blue-main);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-card-glow-shadow-multi-border5 {
            gap: 8px;
            display: flex;
            padding: 16px 16px 1px 1px;
            align-items: flex-start;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-partager-site1 {
            width: 173px;
            height: 204px;
          }
          .accueil-frame1192 {
            gap: 8px;
            width: 420px;
            display: flex;
            padding: 0 0 8px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-frame1222 {
            gap: 8px;
            display: flex;
            padding: 0 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-text216 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text217 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text218 {
            font-weight: 400;
          }
          .accueil-ligne02 {
            gap: 32px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .accueil-card-glow-shadow-multi-border6 {
            gap: 8px;
            display: flex;
            padding: 16px 16px 1px 1px;
            align-items: flex-start;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-diffuser-profils1 {
            width: 172px;
            height: 204px;
          }
          .accueil-frame1193 {
            gap: 8px;
            width: 420px;
            display: flex;
            padding: 0 0 8px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-frame1223 {
            gap: 8px;
            display: flex;
            padding: 0 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-text221 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text222 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text223 {
            font-weight: 400;
          }
          .accueil-text224 {
            font-weight: 700;
          }
          .accueil-text225 {
            font-weight: 400;
          }
          .accueil-text226 {
            font-weight: 700;
          }
          .accueil-card-glow-shadow-multi-border7 {
            gap: 8px;
            display: flex;
            padding: 16px 16px 1px 1px;
            align-items: flex-start;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(248, 249, 248, 1);
          }
          .accueil-andy-k-dev1 {
            width: 173px;
            height: 204px;
          }
          .accueil-frame1194 {
            gap: 8px;
            width: 420px;
            display: flex;
            padding: 0 0 8px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accueil-frame1224 {
            gap: 8px;
            display: flex;
            padding: 0 0 0 12px;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .accueil-text228 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 24px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text229 {
            color: var(--dl-color-neutral-black);
            height: auto;
            font-size: 16px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Atkinson Hyperlegible;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-text230 {
            font-weight: 400;
          }
          .accueil-text231 {
            font-weight: 700;
          }
          .accueil-frame922 {
            gap: 10px;
            height: 48px;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .accueil-button21 {
            gap: 6px;
            height: 36px;
            display: flex;
            padding: 0 12px;
            align-items: center;
            flex-shrink: 0;
            border-radius: 6px;
            justify-content: center;
          }
          .accueil-envelope {
            width: 20px;
            height: 20px;
          }
          .accueil-text233 {
            color: var(--dl-color-blue-main);
            height: auto;
            font-size: 16px;
            font-style: Bold;
            text-align: center;
            font-family: Atkinson Hyperlegible;
            font-weight: 700;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .accueil-footer {
            gap: 31px;
            width: 100%;
            display: flex;
            padding: 40px 80px 48px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            background-color: var(--dl-color-neutral-black);
          }
        `}
      </style>
    </>
  )
}

export default Accueil
