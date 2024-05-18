import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";


const LoginConatainer = styled.main``;        

const Home = () => {

    

    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const login = (dados) => {
        console.log(dados);
    }



    
    
    return ( 
<LoginConatainer className="h-screen surface-100 flex justify-content-center align-content-center align-items-center">
            <form onSubmit={handleSubmit(login)} className="surface-0 p-3">


                <label htmlFor="" className="block text-sm font-bold uppercase mb-1 border-round-sm">Nome</label>
               
                <InputText 
                id="nomedovisitante"
                type="email"
                placeholder="Seu Nome"
                className="w-full mb-3"
                {...register("nomedovisitante", { required: true})}
                aria-invalid={errors.password ? true:false }
                invalid={errors.password ? true : false}
                />

{
                    errors.nomedovisitante && (
                        <span className="text-red-500">Campo Obrigatório</span>
                    )
                }

                <label htmlFor="password">CPF</label>
                
                <div className="mb-3">
                <InputText 
                id="cpfdovisitante"
                placeholder="000.000.000-00"
                className="w-full"
                // toggleMask 
                // feedback={false}
                // style={{width: '100%'}}
                // panelStyle={{width: '100%'}}
                {...register("cpfdovisitante", { required: true})}
                aria-invalid={errors.password ? true:false }
                invalid={errors.password ? true : false}
                />

                {
                    errors.cpfdovisitante && (
                        <span className="text-red-500">Campo Obrigatório</span>
                    )
                }

                </div>




                <label htmlFor="password">CPF</label>
                
                <div className="mb-3">
                <InputText 
                id="cpfdovisitante"
                placeholder="000.000.000-00"
                className="w-full"
                // toggleMask 
                // feedback={false}
                // style={{width: '100%'}}
                // panelStyle={{width: '100%'}}
                {...register("cpfdovisitante", { required: true})}
                aria-invalid={errors.password ? true:false }
                invalid={errors.password ? true : false}
                />

                {
                    errors.cpfdovisitante && (
                        <span className="text-red-500">Campo Obrigatório</span>
                    )
                }

                </div>




                <label htmlFor="password">PROFISSÃO</label>
                
                <div className="mb-3">
                <InputText 
                id="profissãodovisitante"
                placeholder="Médico, Administrativa, ETC"
                className="w-full"
                // toggleMask 
                // feedback={false}
                // style={{width: '100%'}}
                // panelStyle={{width: '100%'}}
                {...register("profissãodovisitante", { required: true})}
                aria-invalid={errors.password ? true:false }
                invalid={errors.password ? true : false}
                />

                {
                    errors.profissãodovisitante && (
                        <span className="text-red-500">Campo Obrigatório</span>
                    )
                }

                </div>


                <Button 
                label="Entrar"
                type="submit"
                className="w-full"
                />
            </form>
        </LoginConatainer>
     );
}
 
export default Home;