import '../css/main-content.css'
import '../css/style.css'
import '../css/reset.css'
import Header from './Header.jsx';
import Content from './Content.jsx';


export default function MainContent () {
    return (
        <main className="main" id="page">
            <Header/>
            <Content video="H91DhKPjhPk"/>
            <section className="colorT4 main-content">
                <div>Discussões Inserção de Tópico</div>
                <div>Tópico inserido (copiar 2 vezes)</div>
            </section>
        </main>
    )
}