import MyLink from "../components/MyLink";

export const blogPost = {
  en: {
    info: (
      <p>
        Friday March 31st, 2023
        <br />
        Posted by <strong>Galoy</strong>
      </p>
    ),
    headline: (
      <p>
        Introducing Blink: Bitcoin Beach Wallet gets a new name, new features for bottom-up bitcoin
        adoption
      </p>
    ),
    text: (
      <div className="stackedit__html">
        <p>
          The Bitcoin Beach Wallet was built for bottom-up bitcoin adoption. It launched in 2020 in
          El Zonte, El Salvador to help support the Bitcoin Beach project’s vision of creating a
          circular bitcoin economy. Many of the features of the wallet were designed with and for
          residents and local merchants who are unbanked and unfamiliar with bitcoin. We published a
          long-form article about this in{" "}
          <MyLink href="https://galoy.io/bitcoin-banking-for-communities-lessons-learned-from-el-zonte/">
            Bitcoin Banking for Communities: Lessons Learned from Bitcoin Beach
          </MyLink>
          .
        </p>
        <p>
          The wallet started as a proof of concept for the{" "}
          <MyLink href="https://galoy.io/">Galoy</MyLink> open source, bitcoin-native core banking
          platform. It has since grown into a popular lightning wallet for bitcoin community
          projects and Lightning enthusiasts globally. The declared purpose of becoming the best
          tool for bottom-up bitcoin adoption has attracted tens of thousands of active users, and
          many requests for features that would increase utility and accessibility across countries
          and cultures.
        </p>
        <p>
          In 2023, we are unlocking the full potential of Bitcoin Beach Wallet as the Lightning
          wallet for community building.
        </p>
        <h3 id="here-are-a-few-things-you-can-expect-from-us-this-year">
          Here are a few things you can expect from us this year:
        </h3>
        <ul>
          <li>
            <p>
              <strong>Name change:</strong> It’s time for a name that’s suited for growth. Something
              easy to say, easy to type, and without a problematic acronym (You can look up BBW on
              urban dictionary if you don’t already cringe when typing it). So we’re renaming the
              wallet to Blink. Why Blink? We like this definition:
            </p>
            <blockquote>
              <p>Blink (n): a brief flash of light; twinkle or glimmer.</p>
            </blockquote>
            <p>
              The name blink represents speed and positivity. It’s the glimmer in the eye of a
              person who just received their first sats. It’s the embodiment of a transaction
              zapping across the world, connecting two people who never before could transmit value
              to each other. It’s an adaptation of “bink,” a word coined by
              <span> </span>
              <MyLink href="https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/#014834">
                James A. Donald
              </MyLink>
              <span> </span>
              in one of the very first reactions to Satoshi’s announcement of Bitcoin in the
              Cryptography Mailing List when he wrote “Let us call a bitcoin bank a bink.” (just add
              Lightning). Pick your favorite origin story, and please share this news with your
              community so they’re ready for the name change. We’ll be introducing the name in-app,
              updating lightning addresses to<span> </span>
              <MyLink href="http://blink.sv">blink.sv</MyLink> and communicating with customers well
              before changing the name and icon of the app.
            </p>
          </li>
          <li>
            <p>
              <strong>Stablesats:</strong> Blink is the first Bitcoin-only wallet that allows users
              to receive to, send from and hold in a USD equivalent account. This helps overcome
              short-term volatility of bitcoin, which is a main friction point for new user and
              merchant adoption. The value is held constant using{" "}
              <MyLink href="https://stablesats.com/">Stablesats</MyLink> - an open source project
              which uses a derivatives trading strategy to create “synthetic USD”, allowing anyone
              to manage their exposure in the transition from today’s global reserve currency to
              tomorrow’s in one app.
            </p>
          </li>
          <li>
            <p>
              <strong>Any display currency:</strong> There are 180 currencies recognized globally.
              As a person using bitcoin for the first time, having the ability to use your own
              display currency is critical for smooth onboarding. 30 currencies have already been 
              introduced, and more will be added in future releases. Don’t see your currency? Hop into
              the new <MyLink href="https://t.me/blinkbtc">Blink Telegram group</MyLink> and let us
              know what currency you’d like built into the wallet.
            </p>
          </li>
          <li>
            <p>
              <strong>Any language:</strong> Our goal is for Blink to be available in every language
              where there’s a bitcoin community project. We’ve grown from 5 to 15 languages this
              year, and have many more in progress. If you’d like to contribute to an in progress or
              new translation, you can hop into the{" "}
              <MyLink href="https://chat.galoy.io/galoy/channels/translating-bitcoin-beach-wallet">
                Translating Blink Channel
              </MyLink>{" "}
              on Mattermost.
            </p>
          </li>
          <li>
            <p>
              <strong>Merchant features:</strong> Circular economies thrive when merchants are able
              to onboard to and accept bitcoin simply and reliably. Blink makes it easy and flexible
              to receive payments over Lightning and on-chain by enabling many ways to get paid:
            </p>
            <ul>
              <li>
                <strong>LN address:</strong> All users have a Lightning address such as{" "}
                <u>user@blink.sv</u>. (BTW, the legacy <u>user@pay.bbw.sv</u> addresses will
                continue to work)
              </li>
              <li>
                <strong>Lightning cash register (Web POS):</strong> This receive-only web
                application can be shared with and saved on anybody’s phone as an app, so the entire
                staff of a business can receive payments into one account - in sats, or
                automatically converted to dollars upon receipt. Try it out:{" "}
                <MyLink href="https://pay.blink.sv/community">pay.blink.sv/community</MyLink>
              </li>
              <li>
                <strong>Printable Paycode (LNURL):</strong> Creating a new invoice for each purchase
                isn’t always convenient. With the printable paycode, businesses, fundraisers, street
                performers or anybody else can display a physical printed QR code that customers can
                scan and pay in seconds. View an example at{" "}
                <MyLink href="https://pay.blink.sv/community/print">
                  pay.blink.sv/community/print
                </MyLink>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>In-app bitcoin education:</strong> Users of Blink can earn sats for learning
              the basics about bitcoin. The education section will be growing by 6x over the coming
              months to feature a more in-depth set of lessons and quizzes to help people understand
              more about the history and principles that make Bitcoin and Lightning unique and
              powerful.
            </p>
          </li>
          <li>
            <p>
              <strong>Nostr integration:</strong> Blink isn’t only for onboarding newbies. It’s also
              a go-to custodial wallet for tipping, testing or traveling. As such, we’ve already
              implemented NIP-57 (zaps!) and will be providing{" "}
              <MyLink href="http://blink.sv">blink.sv</MyLink> NIP-05 identifiers for users, coming
              soon™.
            </p>
          </li>
        </ul>
        <p>
          Watch the recent community call to dig deeper into all of the above:
          <br />
        </p>

        <iframe
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/t1kFy3tX1kQ?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <p>
          Try out these features and more by downloading Bitcoin Beach Wallet today from{" "}
          <MyLink href="http://blink.sv">blink.sv</MyLink>. We have other exciting features in the
          works, and would love to hear your feedback as the wallet evolves. Connect with us on
          twitter at <MyLink href="https://twitter.com/blinkbtc">@blinkbtc</MyLink> and join us on
          Telegram at <MyLink href="http://t.me/blinkbtc">t.me/blinkbtc</MyLink> to help drive
          bottom-up bitcoin adoption around the world.
        </p>
      </div>
    ),
  },
  es: {
    info: (
      <p>
        Viernes 31 de marzo de 2023
        <br />
        Publicado por <strong>Galoy</strong>
      </p>
    ),
    headline: (
      <p>
        Presentamos Blink: Bitcoin Beach Wallet recibe un nuevo nombre y nuevas funciones para la
        adopción ascendente de bitcoin
      </p>
    ),
    text: (
      <div className="stackedit__html">
        <p>
          Bitcoin Beach Wallet fue construido para la adopción de bitcoin de abajo hacia arriba. Se
          lanzó en 2020 en El Zonte, El Salvador, para apoyar la visión del proyecto Bitcoin Beach
          de crear una economía bitcoin circular. Muchas de las características de la billetera
          fueron diseñadas con y para los residentes y comerciantes locales que no tienen cuenta
          bancaria y no están familiarizados con bitcoin.{" "}
          <MyLink href="https://galoy.io/banca-de-bitcoin-para-comunidades-lecciones-aprendidas-de-bitcoin-beach/">
            Publicamos un extenso artículo sobre este tema en Bitcoin Banking for Communities:
            Lecciones aprendidas de Bitcoin Beach.
          </MyLink>
        </p>
        <p>
          La billetera comenzó como una prueba de concepto para la plataforma bancaria de código
          abierto <MyLink href="https://galoy.io/">Galoy</MyLink>, nativa de bitcoin. Desde entonces
          ha crecido hasta convertirse en una popular billetera Lightning para proyectos de
          comunidades bitcoin y entusiastas de Lightning en todo el mundo. El propósito de
          convertirse en la mejor herramienta para la adopción de bitcoin ha atraído a decenas de
          miles de usuarios activos, y muchas peticiones de características que aumenten la utilidad
          y la accesibilidad en todos los países y culturas.
        </p>
        <p>
          En 2023, estamos desbloqueando todo el potencial de Bitcoin Beach Wallet como la billetera
          Lightning para la creación de comunidades.
        </p>
        <h3 id="here-are-a-few-things-you-can-expect-from-us-this-year">
          Estas son algunas de las cosas que puedes esperar de nosotros este año:
        </h3>
        {/* Here */}
        <ul>
          <li>
            <p>
              <strong>Cambio de nombre:</strong> Es hora de un nombre adecuado para el crecimiento.
              Algo fácil de decir, fácil de escribir y sin un acrónimo problemático (puedes buscar
              BBW en el diccionario urbano). Así que vamos a cambiar el nombre de la billetera a
              Blink. ¿Por qué Blink? Nos gusta esta definición:
            </p>
            <blockquote>
              <p>Blink (n): breve destello de luz; centelleo o destello.</p>
            </blockquote>
            <p>
              El nombre Blink representa velocidad y positividad. Es el brillo en los ojos de una
              persona que acaba de recibir su primera saturación. Es la encarnación de una
              transacción que atraviesa el mundo, conectando a dos personas que nunca antes habían
              podido transmitirse valor mutuamente. Es una adaptación de “bink”, una palabra acuñada
              por
              <span> </span>
              <MyLink href="https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/#014834">
                James A. Donald
              </MyLink>
              <span> </span>
              en una de las primeras reacciones al anuncio de Bitcoin por parte de Satoshi en la
              Cryptography Mailing List, cuando escribió “Llamemos bink a un banco bitcoin”. (sólo
              hay que añadir Lightning). Elige tu historia de origen favorita y, por favor, comparte
              esta noticia con tu comunidad para que estén preparados para el cambio de nombre.
              Introduciremos el nombre in-app, actualizaremos las direcciones lightning a
              <span> </span>
              <MyLink href="http://blink.sv">blink.sv</MyLink> y nos comunicaremos con los clientes
              mucho antes de cambiar el nombre y el icono de la app.
            </p>
          </li>
          <li>
            <p>
              <strong>Stablesats:</strong> Blink es la primera billeltera exclusiva de Bitcoin que
              permite a los usuarios recibir, enviar y mantener en una cuenta equivalente en USD.
              Esto ayuda a superar la volatilidad a corto plazo del bitcoin, que es el principal
              punto de fricción para la adopción por parte de nuevos usuarios y comerciantes. El
              valor se mantiene constante mediante{" "}
              <MyLink href="https://stablesats.com/">Stablesats</MyLink> - un proyecto de código
              abierto que utiliza una estrategia de negociación de derivados para crear “USD
              sintéticos”, lo que permite a cualquiera gestionar su exposición en la transición de
              la moneda de reserva mundial de hoy a la de mañana en una sola aplicación.
            </p>
          </li>
          <li>
            <p>
              <strong>Cualquier divisa de visualización:</strong> Hay 180 divisas reconocidas en
              todo el mundo. Como usuario de bitcoin por primera vez, tener la posibilidad de
              utilizar tu propia moneda de visualización es fundamental para una integración sin
              problemas. Ya se han introducido 30 monedas, y se añadirán más en futuras versiones.
              ¿No ves tu moneda? Entra en el nuevo grupo de{" "}
              <MyLink href="https://t.me/blinkbtc">Telegram de Blink</MyLink> y dinos qué moneda te
              gustaría tener en el monedero.
            </p>
          </li>
          <li>
            <p>
              <strong>Cualquier idioma:</strong> Nuestro objetivo es que Blink esté disponible en
              todos los idiomas donde exista un proyecto de comunidad bitcoin. Hemos crecido de 5 a
              15 idiomas este año, y tenemos muchos más en progreso. Si quieres contribuir a una
              traducción en curso o nueva, puedes entrar en el canal de{" "}
              <MyLink href="https://chat.galoy.io/galoy/channels/translating-bitcoin-beach-wallet">
                traducción de Blink
              </MyLink>{" "}
              en Mattermost.
            </p>
          </li>
          <li>
            <p>
              <strong>Funciones para negocios:</strong> Las economías circulares prosperan cuando
              los comerciantes pueden incorporarse y aceptar bitcoin de forma sencilla y fiable.
              Blink hace que sea fácil y flexible recibir pagos a través de Lightning y en la
              cadena, permitiendo muchas maneras de cobrar:
            </p>
            <ul>
              <li>
                <strong>Dirección LN:</strong> Todos los usuarios tienen una dirección Lightning
                como <u>user@blink.sv</u>. (BTW, las direcciones <u>user@pay.bbw.sv</u> heredadas
                seguirán funcionando)
              </li>
              <li>
                <strong>Caja registradora Lightning (Web POS):</strong> Esta aplicación web de sólo
                recepción puede compartirse y guardarse en el teléfono de cualquiera como una app,
                de modo que todo el personal de un negocio puede recibir pagos en una sola cuenta -
                en sats, o convertidos automáticamente a dólares al recibirlos. Pruébelo:{" "}
                <MyLink href="https://pay.blink.sv/community">pay.blink.sv/community</MyLink>
              </li>
              <li>
                <strong>Código de pago imprimible (LNURL):</strong> Crear una nueva factura para
                cada compra no siempre es cómodo. Con el código de pago imprimible, las empresas,
                los recaudadores de fondos, los artistas callejeros o cualquier otra persona pueden
                mostrar un código QR impreso físico que los clientes pueden escanear y pagar en
                segundos. Ver un ejemplo en{" "}
                <MyLink href="https://pay.blink.sv/community/print">
                  pay.blink.sv/community/print
                </MyLink>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Educación en bitcoin dentro de la aplicación:</strong> Los usuarios de Blink
              pueden ganar sats por aprender lo básico sobre bitcoin. La sección educativa se
              multiplicará por 6 en los próximos meses para ofrecer un conjunto de lecciones y
              cuestionarios más detallados que ayuden a comprender mejor la historia y los
              principios que hacen que Bitcoin y Lightning sean únicos y poderosos.
            </p>
          </li>
          <li>
            <p>
              <strong>Integración con Nostr:</strong> Blink no es sólo para dar de alta a novatos.
              También es un monedero de confianza para dar propinas, hacer pruebas o viajar. Como
              tal, ya hemos implementado el NIP-57 (¡zaps!) y proporcionaremos identificadores{" "}
              <MyLink href="http://blink.sv">blink.sv</MyLink> NIP-05 para los usuarios,
              próximamente™.
            </p>
          </li>
        </ul>
        <p>
          Vea la reciente convocatoria de la comunidad para profundizar en todo lo anterior:
          <br />
        </p>

        <iframe
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/t1kFy3tX1kQ?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <p>
          Prueba estas características y más descargando Bitcoin Beach Wallet hoy mismo desde{" "}
          <MyLink href="http://blink.sv">blink.sv</MyLink>. Tenemos otras características
          interesantes en preparación, y nos encantaría escuchar sus comentarios a medida que la
          billetera evoluciona. Conéctate con nosotros en twitter en{" "}
          <MyLink href="https://twitter.com/blinkbtc">@blinkbtc</MyLink> y únete a nosotros en
          Telegram en <MyLink href="http://t.me/blinkbtc">t.me/blinkbtc</MyLink> para ayudar a
          impulsar la adopción de bitcoin en todo el mundo.
        </p>
      </div>
    ),
  },
  fr: {
    info: (
      <p>
        Vendredi 31 mars 2023
        <br />
        Posté par <strong>Galoy</strong>
      </p>
    ),
    headline: (
      <p>
        Présentation de Blink : Bitcoin Beach Wallet change de nom et se dote de nouvelles
        fonctionnalités pour l’adoption du bitcoin.
      </p>
    ),
    text: (
      <div className="stackedit__html">
        <p>
          Bitcoin Beach Wallet a été construit pour une adoption ascendante du bitcoin. Il a été
          lancé en 2020 à El Zonte, au Salvador, pour soutenir la vision du projet Bitcoin Beach de
          créer une économie bitcoin circulaire. De nombreuses fonctionnalités du portefeuille ont
          été conçues avec et pour les habitants et les commerçants locaux qui n’ont pas de compte
          bancaire et ne sont pas familiarisés avec le bitcoin. Nous avons publié un article
          détaillé sur ce sujet dans{" "}
          <MyLink href="https://galoy.io/bitcoin-banking-for-communities-lessons-learned-from-el-zonte/">
            Bitcoin Banking for Communities : Lessons learned from Bitcoin Beach
          </MyLink>
          .
        </p>
        <p>
          Le portefeuille a commencé comme une preuve de concept pour la plateforme bancaire open
          source native bitcoin <MyLink href="https://galoy.io/">Galoy</MyLink>. Depuis, il est
          devenu un portefeuille Lightning populaire pour les projets communautaires bitcoins et les
          enthousiastes du Lightning dans le monde entier. L’objectif de devenir le meilleur outil
          pour l’adoption du bitcoin a attiré des dizaines de milliers d’utilisateurs actifs et de
          nombreuses demandes de fonctionnalités qui améliorent la convivialité et l’accessibilité à
          travers les pays et les cultures.
        </p>
        <p>
          En 2023, nous allons libérer tout le potentiel de Bitcoin Beach Wallet en tant que
          portefeuille Lightning pour le développement de la communauté.
        </p>
        <h3 id="here-are-a-few-things-you-can-expect-from-us-this-year">
          Voici quelques-unes des choses que vous pouvez attendre de nous cette année :
        </h3>
        <ul>
          <li>
            <p>
              <strong>Changement de nom :</strong> Il est temps de trouver un nom qui s´adapté à
              notre croissance. Quelque chose de facile à dire, facile à épeler et sans acronyme
              problématique (vous pouvez chercher BBW dans le dictionnaire urbain). Changeons donc
              le nom du portefeuille à “Blink”. Pourquoi “Blink” ? Nous aimons cette définition :
            </p>
            <blockquote>
              <p>Blink (n) : bref éclair de lumière ; scintillation ou étincelle.</p>
            </blockquote>
            <p>
              Le nom Blink représente la vitesse et la positivité. C’est la lueur dans les yeux
              d’une personne qui vient de recevoir sa première saturation. C’est l’incarnation d’une
              transaction qui bouleverse le monde, reliant deux personnes qui n’ont jamais été en
              mesure de se transmettre de la valeur l’une à l’autre. Il s’agit d’une adaptation de
              “bink”, un mot inventé par
              <span> </span>
              <MyLink href="https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/#014834">
                James A. Donald
              </MyLink>
              <span> </span>
              dans l’une des premières réactions à l’annonce du bitcoin de Satoshi sur la
              Cryptography Mailing List, lorsqu’il a écrit “Let’s call a bitcoin bank a bink”
              (appelons une banque bitcoin un bink). (il suffit d’ajouter Lightning). Choisissez
              votre histoire d’origine préférée et partagez cette nouvelle avec votre communauté
              afin qu’elle puisse se préparer au changement de nom. Nous introduirons le nom dans
              l’application, mettrons à jour les adresses Lightning en
              <span> </span>
              <MyLink href="http://blink.sv">blink.sv</MyLink> et communiquerons avec les clients
              bien avant de changer le nom et l’icône de l’application.
            </p>
          </li>
          <li>
            <p>
              <strong>Stablesats:</strong> Blink est le premier portefeuille exclusivement en
              bitcoins qui permet aux utilisateurs de recevoir, d’envoyer et de conserver des fonds
              sur un compte équivalent en USD. Cela permet de surmonter la volatilité à court terme
              du bitcoin, qui est le principal obstacle à son adoption par les nouveaux utilisateurs
              et les commerçants. La valeur est maintenue constante par{" "}
              <MyLink href="https://stablesats.com/">Stablesats</MyLink> - un projet open source qui
              utilise une stratégie de négociation de produits dérivés pour créer des “USD
              synthétiques”, ce qui permet à chacun de gérer son exposition à la transition de la
              monnaie de réserve mondiale d’aujourd’hui à celle de demain en une seule application.
            </p>
          </li>
          <li>
            <p>
              <strong>N’importe quelle monnaie d’affichage :</strong> Il existe 180 monnaies
              reconnues dans le monde. En tant que nouvel utilisateur de bitcoins, la possibilité
              d’utiliser sa propre monnaie d’affichage est essentielle pour une intégration
              transparente. Trente monnaies ont déjà été introduites et d’autres seront ajoutées
              dans les prochaines versions. Vous ne voyez pas votre monnaie ? Rejoignez le nouveau
              groupe <MyLink href="https://t.me/blinkbtc">Blink Telegram</MyLink> et dites-nous
              quelle devise vous aimeriez voir apparaître dans le portefeuille.
            </p>
          </li>
          <li>
            <p>
              <strong>N’importe quelle langue :</strong> Notre objectif est de rendre Blink
              disponible dans toutes les langues où il existe un projet communautaire bitcoin. Nous
              sommes passés de 5 à 15 langues cette année, et de nombreuses autres sont en cours de
              développement. Si vous souhaitez contribuer à une traduction en cours ou nouvelle,
              vous pouvez rejoindre le canal de{" "}
              <MyLink href="https://chat.galoy.io/galoy/channels/translating-bitcoin-beach-wallet">
                traduction de Blink
              </MyLink>{" "}
              sur Mattermost.
            </p>
          </li>
          <li>
            <p>
              <strong>Fonctionnalités pour entreprises :</strong> Les économies circulaires
              prospèrent lorsque les commerçants peuvent facilement et de manière fiable incorporer
              et accepter des bitcoins. Blink rend facile et flexible la réception de paiements via
              Lightning et sur la blockchain, permettant ainsi de nombreuses façons d’être payé :
            </p>
            <ul>
              <li>
                <strong>Adresse LN :</strong> Tous les utilisateurs ont une adresse Lightning telle
                que <u>user@blink.sv</u>. (BTW, les anciennes adresses <u>user@pay.bbw.sv</u>{" "}
                fonctionnent toujours)
              </li>
              <li>
                <strong>Caisse enregistreuse Lightning (Web POS) :</strong> Cette application web de
                réception uniquement peut être partagée et sauvegardée sur le téléphone de n’importe
                qui en tant qu’application, afin que tous les employés d’une entreprise puissent
                recevoir des paiements sur un compte unique - en sats, ou convertis automatiquement
                en dollars à la réception. Essayez-la :{" "}
                <MyLink href="https://pay.blink.sv/community">pay.blink.sv/community</MyLink>
              </li>
              <li>
                <strong>Code de paiement imprimable (LNURL) :</strong> Il n’est pas toujours
                pratique de créer une nouvelle facture pour chaque achat. Avec le code de paiement
                imprimable, les entreprises, les collecteurs de fonds, les artistes de rue ou toute
                autre personne peuvent afficher un code QR physique imprimé que les clients peuvent
                scanner et payer en quelques secondes. Voir un exemple sur{" "}
                <MyLink href="https://pay.blink.sv/community/print">
                  pay.blink.sv/community/print
                </MyLink>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>L’éducation en bitcoins dans l’application :</strong> Les utilisateurs de
              Blink peuvent gagner des sats pour apprendre les bases du bitcoin. La section
              éducative sera multipliée par 6 dans les mois à venir pour offrir un ensemble plus
              détaillé de leçons et de quiz pour aider à mieux comprendre l’histoire et les
              principes qui rendent le bitcoin et Lightning uniques et puissants.
            </p>
          </li>
          <li>
            <p>
              <strong>Intégration avec Nostr :</strong> Blink n’est pas seulement destiné à
              l’inscription des débutants. C’est aussi un portefeuille de confiance pour les
              pourboires, les tests ou les voyages. À ce titre, nous avons déjà mis en œuvre le
              NIP-57 (zaps !) et fournirons aux utilisateurs des identifiants{" "}
              <MyLink href="http://blink.sv">blink.sv</MyLink> NIP-05, à venir prochainement™.
            </p>
          </li>
        </ul>
        <p>
          Voir le récent appel à la communauté pour une plongée plus profonde dans tout ce qui
          précède:
          <br />
        </p>

        <iframe
          width="100%"
          height="420"
          src="https://www.youtube.com/embed/t1kFy3tX1kQ?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <p>
          Essayez ces fonctionnalités et bien plus encore en téléchargeant Bitcoin Beach Wallet dès
          aujourd’hui sur <MyLink href="http://blink.sv">blink.sv</MyLink>. Nous avons d’autres
          fonctionnalités passionnantes dans le pipeline, et nous aimerions entendre vos
          commentaires au fur et à mesure que le portefeuille évolue. Connectez-vous avec nous sur
          twitter à <MyLink href="https://twitter.com/blinkbtc">@blinkbtc</MyLink> et rejoignez-nous
          sur Telegram à <MyLink href="http://t.me/blinkbtc">t.me/blinkbtc</MyLink> pour aider à
          l’adoption du bitcoin dans le monde entier.
        </p>
      </div>
    ),
  },
};
