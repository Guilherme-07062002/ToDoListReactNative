import axios from "axios";

export default class Api {
    address = '192.168.0.105'
    async save(tarefa) {
        try {
            console.log(JSON.stringify(tarefa))
            await axios.post(`http://${this.address}:3000/add_task`, tarefa, {
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
            await axios.delete(`http://${this.address}:3000/del_task/${idTarefa}`)
            .then(response => console.log(response.data))
            
        } catch (error) {
            console.log(error)
        }
    }
    async read() {
        try {
            const response = await axios.get(`http://${this.address}:3000/list_tasks`);
            const tasks = response.data.map(element => ({ descricao: element.descricao, id: element.id }));
            return tasks;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    
}