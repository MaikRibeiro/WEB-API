var UsuarioModel = new function() {
    model = this;
    model.usuarios = ko.observable();
    model.carregar = function () {
        $.ajax("http://localhost:55552/Api/Usuarios").done(data => model.usuarios(data));
    }
    model.carregar();
}
ko.applyBindings(UsuarioModel);