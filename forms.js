function valida(){
    if (document.f_aula.f_inome.value==""){
        alert("Digitar seu nome");
        document.getElementById(f_inome).focus();
        return false;
    }
 if (document.f_aula.f_isenha.value==""){
        alert("Digita sua senha");
        document.getElementById(f_isenha).focus();
        return false;
 }

 var data= new Date();
 var dt = new Array;
 var aux = document.f_aula.f_data.value;
 dt= aux.split("/");
 if (((dt[0]<1|| (dt[0]> 31)) || ((dt[1]<1) || (dt[1]>12)) || ((dt[2] < dt.getFullYear() - 150) || (dt[2]> dt.getFullYear())))) {
     alert("Digite uma nova data")
     document.getElementById("f_data").focus();
     return false;
 }

 let vm = document.f_aula.f_email.value;
 if (vm.search("@") == 1){
     alert("Digite um email válido!")
     document.getElementById("f_email").focus();
     return false;
 }
}