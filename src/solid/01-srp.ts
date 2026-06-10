interface User {
    id: number;
    name: string;
}

// Esta clase viola el Principio de Responsabilidad Única (SRP)
class UserBloc {
    constructor(private userService: UserService, private mailer: Mailer) {}

    loadUser( id: number ) {
        this.userService.loadUser(id);
    }

    saveUser( user: User ) {
        this.userService.saveUser(user);
    }

    notifyUser() {
        this.mailer.notifyUser();
    }
}

class SuscriptionBloc {
    onAddSubscription( subscriptionId: number ) {
        // Simula la gestión de suscripciones
        console.log('Agregando suscripción:', subscriptionId );
    }
}

class UserService {
    loadUser( id: number ) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user );
    }
}

class Mailer {
    notifyUser() {
        // Simula el envío de notificaciones
        console.log('Enviando correo a los usuarios');
    }
}

const userService = new UserService();
const mailer = new Mailer();

const userBloc = new UserBloc(userService, mailer);
const suscriptionBloc = new SuscriptionBloc();

userBloc.loadUser(10);
userBloc.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
suscriptionBloc.onAddSubscription(1234);
