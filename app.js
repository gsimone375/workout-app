// Workout tracking application
class WorkoutTracker {
    constructor() {
        this.currentDay = 'A';
        this.workoutData = {
            "A": {
                "nome": "Petto-Dorso-Bicipiti-Addome",
                "esercizi": [
                    {
                        "nome": "Panca piana con manubri (spinte orizzontali)",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "10kg x lato",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Lat machine triangolo",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "35kg",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Spinte su panca inclinata 60° manubri",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "8kg x lato",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Pulley triangolo",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "25kg",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Curl manubri in piedi",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "8kg x lato",
                        "note_esercizio": "",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Hammer Curl manubri",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "6/7 kg x lato",
                        "note_esercizio": "",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Plank classico",
                        "serie_reps": "2 x max tecnico",
                        "peso_partenza": "",
                        "note_esercizio": "Tieni sempre una buona forma esecutiva, quando vedi che la perdi ferma il cronometro. Obiettivo a medio termine: 120\"",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Side plank",
                        "serie_reps": "2 x max tecnico x lato",
                        "peso_partenza": "",
                        "note_esercizio": "Tieni sempre una buona forma esecutiva, quando vedi che la perdi ferma il cronometro. Obiettivo a medio termine: 120\"",
                        "recupero": "90-120"
                    }
                ]
            },
            "B": {
                "nome": "Gambe-Spalle-Trapezio inferiore-Tricipiti-Erettori spinali",
                "esercizi": [
                    {
                        "nome": "Goblet Squat",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "12kg",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Stacchi rumeni manubri",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "8kg x lato",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Lento avanti con manubri da seduto",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "8kg x lato",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Alzate laterali manubri",
                        "serie_reps": "3x8/12",
                        "peso_partenza": "3kg x lato",
                        "note_esercizio": "Tieni sempre le spalle basse, gomiti semitesi e non strattonare il movimento, che deve risultare sempre controllato.",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Pushdown corda",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "French press manubri",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Superman",
                        "serie_reps": "2 x max tecnico",
                        "peso_partenza": "",
                        "note_esercizio": "Tieni sempre una buona forma esecutiva, quando vedi che la perdi ferma il cronometro. Obiettivo a medio termine: 120\"",
                        "recupero": "90-120"
                    }
                ]
            },
            "C": {
                "nome": "Dorso-Petto-Bicipiti-Addome",
                "esercizi": [
                    {
                        "nome": "Rematore con manubrio",
                        "serie_reps": "3x8/10 x lato",
                        "peso_partenza": "12kg x lato",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Push up",
                        "serie_reps": "3x max tecnico",
                        "peso_partenza": "",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Lat machine sbarra",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "50-55kg",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Chest press",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
                        "recupero": "120"
                    },
                    {
                        "nome": "Curl al cavo basso sbarra dritta",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Curl unilaterale Panca Scott (Preacher curl)",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Leg raises supino o appeso (addominali)",
                        "serie_reps": "2 x max tecnico",
                        "peso_partenza": "",
                        "note_esercizio": "Movimento controllato e lento, retroversione mantenuta con lombare sempre piatta sul pavimento. Ginocchia sempre ben tese.",
                        "recupero": "90-120"
                    }
                ]
            },
            "D": {
                "nome": "Spalle-Tricipiti-Gambe",
                "esercizi": [
                    {
                        "nome": "Lento avanti con manubri da seduto",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "6/7kg x lato",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Alzate posteriori con manubri prono su panca inclinata 30 gradi",
                        "serie_reps": "3x8/12",
                        "peso_partenza": "4/5 kg x lato",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Pushdown corda",
                        "serie_reps": "3x10/12",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico ultima rep dell'ultima serie",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Bulgarian split squat corpo libero",
                        "serie_reps": "3x8/15 x lato",
                        "peso_partenza": "",
                        "note_esercizio": "",
                        "recupero": "120"
                    },
                    {
                        "nome": "Leg extension",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico sulla terza serie",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Leg curl",
                        "serie_reps": "3x8/10",
                        "peso_partenza": "",
                        "note_esercizio": "Cedimento tecnico sulla terza serie",
                        "recupero": "90-120"
                    },
                    {
                        "nome": "Side bending con manubrio",
                        "serie_reps": "3x8/10 x lato",
                        "peso_partenza": "8kg",
                        "note_esercizio": "",
                        "recupero": "90-120"
                    }
                ]
            }
        };
        
        // Storage for dates and personal notes
        this.dayData = {
            A: { date: '', personalNotes: {} },
            B: { date: '', personalNotes: {} },
            C: { date: '', personalNotes: {} },
            D: { date: '', personalNotes: {} }
        };
        
        this.init();
    }
    
    init() {
        this.bindEventListeners();
        this.loadDay(this.currentDay);
    }
    
    bindEventListeners() {
        // Tab navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const day = e.target.dataset.day;
                this.switchDay(day);
            });
        });
        
        // Action buttons
        document.getElementById('save-day').addEventListener('click', () => this.saveDay());
        document.getElementById('print-day').addEventListener('click', () => this.printDay());
        document.getElementById('export-pdf').addEventListener('click', () => this.exportPDF());
        
        // Date input
        document.getElementById('workout-date').addEventListener('change', (e) => {
            this.dayData[this.currentDay].date = e.target.value;
        });
    }
    
    switchDay(day) {
        // Save current day data before switching
        this.saveCurrentDayData();
        
        // Update current day
        this.currentDay = day;
        
        // Update active tab
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.day === day) {
                tab.classList.add('active');
            }
        });
        
        // Load new day
        this.loadDay(day);
    }
    
    loadDay(day) {
        const dayInfo = this.workoutData[day];
        
        // Update title
        document.getElementById('day-title').textContent = `Giorno ${day} - ${dayInfo.nome}`;
        
        // Load date - Fixed: Properly restore the saved date
        const dateInput = document.getElementById('workout-date');
        dateInput.value = this.dayData[day].date || '';
        
        // Load exercises
        this.renderExercises(dayInfo.esercizi, day);
    }
    
    renderExercises(exercises, day) {
        const tbody = document.getElementById('exercise-tbody');
        tbody.innerHTML = '';
        
        exercises.forEach((exercise, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${exercise.nome}</td>
                <td>${exercise.serie_reps}</td>
                <td>${exercise.peso_partenza}</td>
                <td>${exercise.note_esercizio}</td>
                <td>${exercise.recupero}</td>
                <td>
                    <textarea 
                        class="personal-notes-input" 
                        data-exercise-index="${index}"
                        placeholder="Inserisci note personali..."
                    >${this.dayData[day].personalNotes[index] || ''}</textarea>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Bind personal notes events
        document.querySelectorAll('.personal-notes-input').forEach(textarea => {
            textarea.addEventListener('input', (e) => {
                const exerciseIndex = parseInt(e.target.dataset.exerciseIndex);
                this.dayData[this.currentDay].personalNotes[exerciseIndex] = e.target.value;
            });
        });
    }
    
    saveCurrentDayData() {
        // Save current date value
        const dateInput = document.getElementById('workout-date');
        this.dayData[this.currentDay].date = dateInput.value;
        
        // Save current personal notes
        document.querySelectorAll('.personal-notes-input').forEach(textarea => {
            const exerciseIndex = parseInt(textarea.dataset.exerciseIndex);
            this.dayData[this.currentDay].personalNotes[exerciseIndex] = textarea.value;
        });
    }
    
    saveDay() {
        this.saveCurrentDayData();
        this.showSuccessMessage('Giorno salvato con successo!');
    }
    
    printDay() {
        window.print();
    }
    
    exportPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        const dayInfo = this.workoutData[this.currentDay];
        const date = this.dayData[this.currentDay].date || 'Data non inserita';
        
        // Title
        doc.setFontSize(18);
        doc.text('Piano di Allenamento', 20, 20);
        
        // Day and date
        doc.setFontSize(14);
        doc.text(`Giorno ${this.currentDay} - ${dayInfo.nome}`, 20, 35);
        doc.text(`Data: ${date}`, 20, 45);
        
        // Table headers
        doc.setFontSize(10);
        let yPosition = 65;
        doc.text('Esercizio', 20, yPosition);
        doc.text('Serie/Reps', 80, yPosition);
        doc.text('Peso', 115, yPosition);
        doc.text('Recupero', 140, yPosition);
        doc.text('Note Personali', 165, yPosition);
        
        // Draw header line
        doc.line(20, yPosition + 2, 190, yPosition + 2);
        yPosition += 10;
        
        // Exercise data
        dayInfo.esercizi.forEach((exercise, index) => {
            if (yPosition > 270) {
                doc.addPage();
                yPosition = 20;
            }
            
            const personalNote = this.dayData[this.currentDay].personalNotes[index] || '';
            
            // Split long text
            const exerciseName = doc.splitTextToSize(exercise.nome, 55);
            const personalNoteText = doc.splitTextToSize(personalNote, 25);
            
            doc.text(exerciseName, 20, yPosition);
            doc.text(exercise.serie_reps, 80, yPosition);
            doc.text(exercise.peso_partenza, 115, yPosition);
            doc.text(exercise.recupero, 140, yPosition);
            doc.text(personalNoteText, 165, yPosition);
            
            const maxLines = Math.max(
                exerciseName.length,
                personalNoteText.length
            );
            yPosition += (maxLines * 5) + 5;
        });
        
        doc.save(`Piano-Allenamento-Giorno-${this.currentDay}.pdf`);
        this.showSuccessMessage('PDF esportato con successo!');
    }
    
    showSuccessMessage(message) {
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'success-message';
        messageDiv.textContent = message;
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.classList.add('fade-out');
            setTimeout(() => {
                messageDiv.remove();
            }, 300);
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WorkoutTracker();
});