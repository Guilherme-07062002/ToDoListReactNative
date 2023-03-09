import axios from "axios";

export default class Api {
    async save(tarefa) {
        try {
            console.log(JSON.stringify(tarefa))
            await axios.post('http://192.168.0.105:3000/add_task', tarefa, {
                headers: {
                  'Content-Type': 'application/json',
                },
                timeout: 5000,
              }).then(response => console.log(response.data))
        } catch (error) {
            console.log(error)
        }
    }
    async remove(idTarefa){
        try {
            await axios.delete(`http://192.168.0.105:3000/del_task/${idTarefa}`)
            .then(response => console.log(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}