import '../css/main-content.css'
import '../css/style.css'
import '../css/reset.css'
import Header from './Header.jsx';

export default function () {
    return (
        <main className="main" id="page">
            <Header/>
            <section className="colorT3 main-content" id="content">
                <div>Bloco de Conteudo 1</div>
                <div>Informações e Botões 1</div>
            </section>
            <section className="colorT4 main-content">
                <div>Resumo</div>
                <div>Discussões Inserção de Tópico</div>
                <div>Tópico inserido (copiar 2 vezes)</div>
            </section>
        </main>
    )
}