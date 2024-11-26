import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoriasEcoComponent } from './historias-eco/historias-eco.component';
import { MapaEcoComponent } from './mapa-eco/mapa-eco.component';
import { ReciclagemEcoComponent } from './reciclagem-eco/reciclagem-eco.component';
import { DesafiosEcoComponent } from './desafios-eco/desafios-eco.component';
import { JoaoealixeiraHistoriaComponent } from './historias-eco/joaoealixeira-historia/joaoealixeira-historia.component';
import { ClubedosrecicladoresComponent } from './historias-eco/clubedosrecicladores/clubedosrecicladores.component';
import { MariaeaarvoreComponent } from './historias-eco/mariaeaarvore/mariaeaarvore.component';
import { PedroeomarComponent } from './historias-eco/pedroeomar/pedroeomar.component';
import { AnaeosdesafiosComponent } from './historias-eco/anaeosdesafios/anaeosdesafios.component';
import { LucaseaenergiaComponent } from './historias-eco/lucaseaenergia/lucaseaenergia.component';
import { PontuacaoComponent } from './pontuacao/pontuacao.component';
import { SegundaAtividadeComponent } from './segunda-atividade/segunda-atividade.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

const routes: Routes = [
  { path: 'home', component:  TelaLoginComponent}, // Rota inicial (login)
  { path: 'home', component: HomePageComponent},
  { path: 'histórias', component: HistoriasEcoComponent},
  { path: 'joaoealixeira', component: JoaoealixeiraHistoriaComponent},
  { path: 'cluberecicladores', component: ClubedosrecicladoresComponent},
  { path: 'maria-arvore', component: MariaeaarvoreComponent},
  { path: 'ana-desafios', component: AnaeosdesafiosComponent},
  { path: 'pedro-mar', component: PedroeomarComponent},
  { path: 'lucas-energia', component: LucaseaenergiaComponent},
  { path: 'mapa', component: MapaEcoComponent},
  { path: 'reciclagem', component: ReciclagemEcoComponent },
  { path: 'desafios', component: DesafiosEcoComponent },
  { path: 'pontuacao', component: PontuacaoComponent },
  { path: 'segunda-atividade', component: SegundaAtividadeComponent },
  { path: 'login', component: TelaCadastroComponent},
  { path: '', redirectTo: '/pontuacao', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
