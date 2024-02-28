import { React } from 'react';
import { HomeModule } from '../modules/home/home.module';
import { Header } from '../components/header.component';
import { Footer } from '../components/footer.component';

export function Layout() {
  return (
    <main>
      <Header></Header>
      <HomeModule></HomeModule>
      <Footer></Footer>
    </main>
  );
}
