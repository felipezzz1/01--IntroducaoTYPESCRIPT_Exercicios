import Adress from "./Adress";

export enum Sexo{
    MASCULINO = "Masculino",
    FEMININO = "Feminino",
    NAODEFINIDO = "Não Definido",
}

export default class User{
    private _name : string;
    private _cpf : number;
    private _sexo : Sexo;
    private _rg : number;
    private _endereco : Adress;
    
    constructor(name : string, cpf : number, rg : number, endereco : Adress){
        this._name = name;
        this._cpf = cpf;
        this._rg = rg;
        this._endereco = endereco;
    }

    set name(name : string){
        this._name = name; 
    }

    get name() : string{
        return this._name;
    }

    set cpf(cpf : number){
        this._cpf = cpf;
    }

    get cpf() : number{
        return this._cpf;
    }

    set rg(rg : number){
        this._rg = rg;
    }

    get rg() : number{
        return this._rg;
    }

    set endereco(endereco : Adress){
        this._endereco = endereco;
    }

    get endereco() : Adress{
        return this._endereco;
    }

    set sexo(sexo: Sexo){
        this._sexo = sexo
    }

    get sexo(): Sexo{
        return this._sexo
    }
}