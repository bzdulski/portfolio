import { useForm } from "react-hook-form"
import { useStore } from "../zustand.config"

import { Item } from "./Item"

export const AppContact = () => {
    const store = useStore()
    const { register, handleSubmit, formState: { errors } } = useForm()
    return ( 
        <>
            {store.isSend ?
                <Item render="textSended"/>
            :
                <>
                    <Item render="textContact"/>

                    <div className={`flex items-center justify-center flex-wrap gap-[3rem] mobile:gap-[4rem]`}>
                        <Item render="contactEmail"/>
                        <Item render="contactPhone"/>
                        <Item render="contactInstagram"/>
                    </div>

                    <div className="flex flex-col gap-[1rem] w-[100%]">
                        <Item render="textForm"/>
                        <Item render="formContact" handleSubmit={handleSubmit}>
                            <Item render="formSender" register={register} errors={errors}/>
                            <Item render="formMessage" register={register} errors={errors}/>
                            <Item render="formButton"/>
                        </Item>
                    </div>
                </>
            }
        </>
    )
}