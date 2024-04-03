var host = document.location.protocol
    + "//" + document.location.host
    + ":" + document.location.port
    + "/api/Usuarios/"
var UsuarioModel = new function () {
    var model = this;
    model.email = ko.observable();
    model.senha = ko.observable();
    model.cofirmarSenha = ko.observable();
    model.Confirmar = ko.computed(function () {
        return model.senha() == model.confirmarSenha();
     }, this);
}

ko.applyBindings(UsuarioModel);