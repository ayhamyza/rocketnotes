import { Container, Profile } from "./styles";
export function Header () {
    return (
        <Container>
            <Profile>
                <img src="https://github.com/WillBorged1733.png" alt="Foto do usuário"/>
                <div>
                    <span>
                        Bem Vindo!
                    </span>
                    <strong>
                        William Borges
                    </strong>
                </div>
            </Profile>
        </Container>
    
    );
}