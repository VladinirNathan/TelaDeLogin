import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useForm } from "react-hook-form";

        

const LoginConatainer = styled.main``;

const Login = () => {

    const {register, handleSubmit, reset, formState: { errors } } = useForm();

    const login = (dados) => {
        console.log(dados);
    }

    return ( 
        <LoginConatainer className="h-screen surface-100 flex justify-content-center align-content-center align-items-center">
            <form onSubmit={handleSubmit(login)} className="surface-0 p-3">
                <label htmlFor="" className="block text-sm font-bold uppercase mb-1 border-round-sm">Email</label>
               
                <InputText 
                id="email"
                type="email"
                placeholder="email.com@gmail.com"
                className="w-full mb-3"
                {...register("email", { required: true})}
                aria-invalid={errors.password ? true:false }
                invalid={errors.password ? true : false}
                />

{
                    errors.email && (
                        <span className="text-red-500">Campo Obrigatório</span>
                    )
                }

                <label htmlFor="password">Password</label>
                
                <div className="mb-3">
                <InputText 
                id="password"
                placeholder="********"
                className="w-full"
                // toggleMask 
                // feedback={false}
                // style={{width: '100%'}}
                // panelStyle={{width: '100%'}}
                {...register("password", { required: true})}
                aria-invalid={errors.password ? true:false }
                invalid={errors.password ? true : false}
                />

                {
                    errors.password && (
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
 
export default Login;

