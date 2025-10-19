function Header(){

    return(
    <>
        <div className="flex justify-center items-center w-full h-28 bg-sky-950">
            <div className="flex flex-col justify-center items-center w-1/2 text-center h-full py-2">
                <img src="/imgs/logo.png" alt="Logo StormSafe" className="-mt-3 h-28 w-auto object-contain" />
                <p className="-mt-6 text-sm text-gray-50">O Seu Algoritmo de Informação e Meteorologia</p>
            </div>
        </div>
    </>
    )
}

export default Header