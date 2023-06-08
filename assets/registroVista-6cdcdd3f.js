import { U as User, P as Perfil } from "./main-dd68d2c9.js";
const registroVista = {
  template: `
    <div
    class="vh-100 d-flex align-items-center justify-content-center"
    style="padding-top: 100px"
  >
    <div class="col-12 col-md-4">
        <h1 class="text-center p-2">Registro</h1>
        <form id="form_registro" class="p-3" novalidate>
            <label class="mt-3 form-label text-white" for="nombre">Nombre: </label>
            <input type="text" class="form-control" value="" placeholder ="Manolito" id="nombre" required />
            <div class="invalid-feedback">El nombre no es correcto</div>
  
            <label class="mt-3 form-label text-white" for="apellidos">Apellidos: </label>
            <input type="text" class="form-control" value="" placeholder = "Gafotas Rotas" id="apellidos" required />
            <div class="invalid-feedback">Este campo no es correcto</div>
  
            <label class="mt-3 form-label text-white" for="email">Email</label>
            <input
                id="email1"
                type="email"
                class="form-control"
                value=""
                placeholder = "ychag@example.com"
                required
            />
            <div class="invalid-feedback">El email no es correcto</div>
            <label class="mt-3 form-label text-white" for="nick">Contraseña: </label>
            <input id="contrasena" type="password" class="form-control" value="" pattern="[A-Za-z]{8,}" placeholder = "Contraseña" required/>
            <div class="invalid-feedback">
                La contraseña debe contener 8 letras o más que deben ser mayusculas y minusculas, no se aceptan signos ni números
            </div>
            <button type="submit" class="mt-5 btn btn-success w-100">
                Enviar
            </button>
            <hr class="mt-5" />
            <button type="submit" class="mt-1 btn btn-primary w-100">
                Registrate con Google
            </button>
        </form>
    </div>
  </div>
      `,
  script: () => {
    document.querySelector("#form_registro").addEventListener("submit", async function(e) {
      e.preventDefault();
      try {
        const usuario = {
          email: document.querySelector("#email1").value,
          password: document.querySelector("#contrasena").value
        };
        const nuevoUser = await User.create(usuario);
        const perfilData = {
          nombre: document.querySelector("#nombre").value,
          apellidos: document.querySelector("#apellidos").value,
          user_id: nuevoUser.id
          // id del registro
        };
        await Perfil.create(perfilData);
        alert("Usuario creado con éxito");
        window.location.href = "/#/login";
      } catch (error) {
        console.log(error);
      }
    });
  }
};
export {
  registroVista as default
};
