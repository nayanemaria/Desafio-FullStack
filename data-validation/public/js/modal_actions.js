  function setDataModalEdit(id){
    $.get("/cadastros/"+id, function(data){
        userData = JSON.parse(data);
        var formulario = document.getElementById("edit_data");
        var nome = document.getElementById("edit_nome");
        var email = document.getElementById("edit_email");
        var cpf_cnpj = document.getElementById("edit_cpf_cnpj");
        var telefone = document.getElementById("edit_telefone");

        formulario.action = "/cadastros/"+id;
        nome.value = userData["nome"];
        email.value = userData["email"];
        cpf_cnpj.value = userData["cpf_cnpj"];
        telefone.value = userData["telefone"];

    });
  }

  function setDataModalDelete(id){
        var formulario = document.getElementById("delete_data");
        formulario.action = "/cadastros/"+id;
  }

