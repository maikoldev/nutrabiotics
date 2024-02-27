import Breadcrumb from "@/components/layouts/Breadcrumb";
import FounderCard from "@/components/about-us/FounderCard";

const breadcrumbItems = [
  { text: 'Inicio', href: '/' },
  { text: 'Nosotros', href: '/about-us' },
  { text: 'Nuestros Fundadores', active: true },
];

const OurFounders = () => {
  return (
    <>
      <section className="container mx-auto py-8">
        <Breadcrumb items={breadcrumbItems} />
      </section>

      <section className="container mx-auto">
        <FounderCard photo={require('@/assets/founders/benoit-raby.jpg')} name="Benoit Raby" className="mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </FounderCard>
        <FounderCard photo={require('@/assets/founders/luc-lemaire.jpg')} name="Luc Lemaire" className="mb-16" reserve>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </FounderCard>
        <FounderCard photo={require('@/assets/founders/javier-galvis.jpg')} name="Jaiver Galvis" className="mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </FounderCard>
      </section>

      <section className="container mx-auto py-8">
        <p className="text-center lg:text-[32px] lg:leading-10 font-medium">
          Hoy, ese sueño sigue intacto, haciendo visible nuestro objetivo en centenares de miembros de una tribu que se mueve hacia el mismo fin: <b className="font-extrabold">Reavivar los propósitos médicos, aportando bienestar al mundo.</b>
        </p>
      </section>
    </>
  )
}

export default OurFounders;