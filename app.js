// Dati degli allenamenti
const workoutData = {
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

// Variabili globali
let currentDay = 'A';
let currentWorkout = {};
let editingWorkoutId = null;

// Elementi DOM
const navButtons = document.querySelectorAll('.nav-btn');
const workoutSection = document.getElementById('workout-section');
const historySection = document.getElementById('history-section');
const workoutTitle = document.getElementById('workout-title');
const workoutDate = document.getElementById('workout-date');
const exercisesTable = document.getElementById('exercises-table');
const saveWorkoutBtn = document.getElementById('save-workout');
const exportPdfBtn = document.getElementById('export-pdf');
const exportExcelBtn = document.getElementById('export-excel');
const exportHistoryExcelBtn = document.getElementById('export-history-excel');
const backupDataBtn = document.getElementById('backup-data');
const restoreDataBtn = document.getElementById('restore-data');
const restoreFileInput = document.getElementById('restore-file');
const historyList = document.getElementById('history-list');
const editModal = document.getElementById('edit-modal');
const closeModalBtn = document.getElementById('close-modal');
const saveEditBtn = document.getElementById('save-edit');
const cancelEditBtn = document.getElementById('cancel-edit');

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    // Imposta la data di oggi (2025-09-19 basata sulla data corrente fornita)
    const today = '2025-09-19';
    workoutDate.value = today;
    
    // Carica i dati dell'allenamento corrente
    loadWorkout(currentDay);
    
    // Carica la cronologia se siamo nella sezione cronologia
    if (currentDay === 'cronologia') {
        loadHistory();
    }
}

function setupEventListeners() {
    // Navigazione
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.dataset.day;
            switchSection(day);
        });
    });
    
    // Salva allenamento
    saveWorkoutBtn.addEventListener('click', saveCurrentWorkout);
    
    // Export
    exportPdfBtn.addEventListener('click', exportToPDF);
    exportExcelBtn.addEventListener('click', exportToExcel);
    exportHistoryExcelBtn.addEventListener('click', exportHistoryToExcel);
    
    // Backup/Restore
    backupDataBtn.addEventListener('click', backupData);
    restoreDataBtn.addEventListener('click', () => restoreFileInput.click());
    restoreFileInput.addEventListener('change', restoreData);
    
    // Modal
    closeModalBtn.addEventListener('click', closeModal);
    cancelEditBtn.addEventListener('click', closeModal);
    saveEditBtn.addEventListener('click', saveEditedWorkout);
    
    // Chiudi modal cliccando fuori
    editModal.addEventListener('click', (e) => {
        if (e.target === editModal) closeModal();
    });
    
    // Event listener per il cambio di data
    workoutDate.addEventListener('change', () => {
        if (currentDay !== 'cronologia') {
            loadSavedWorkoutData(currentDay);
        }
    });
}

function switchSection(section) {
    // Aggiorna navigazione
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-day="${section}"]`).classList.add('active');
    
    if (section === 'cronologia') {
        workoutSection.classList.add('hidden');
        historySection.classList.remove('hidden');
        currentDay = section;
        loadHistory();
    } else {
        historySection.classList.add('hidden');
        workoutSection.classList.remove('hidden');
        currentDay = section;
        loadWorkout(section);
    }
}

function loadWorkout(day) {
    // Assicurati che il giorno sia valido
    if (!workoutData[day]) {
        console.error('Giorno non trovato:', day);
        return;
    }
    
    const workout = workoutData[day];
    workoutTitle.textContent = workout.nome;
    
    // Svuota la tabella prima di caricare nuovi dati
    exercisesTable.innerHTML = '';
    
    // Genera la tabella degli esercizi per il giorno specifico
    workout.esercizi.forEach((esercizio, index) => {
        const row = createExerciseRow(esercizio, index);
        exercisesTable.appendChild(row);
    });
    
    // Carica i dati salvati se esistono per questo giorno e data
    loadSavedWorkoutData(day);
}

function createExerciseRow(esercizio, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="exercise-name">${esercizio.nome}</td>
        <td><input type="text" value="${esercizio.serie_reps}" data-field="serie_reps" data-index="${index}"></td>
        <td><input type="text" value="${esercizio.peso_partenza}" data-field="peso_partenza" data-index="${index}"></td>
        <td><input type="text" value="" data-field="peso_usato" data-index="${index}" placeholder="Es: 12kg"></td>
        <td><input type="text" value="" data-field="serie_effettive" data-index="${index}" placeholder="Es: 3x10"></td>
        <td><textarea data-field="note_esercizio" data-index="${index}" rows="2">${esercizio.note_esercizio}</textarea></td>
        <td><input type="text" value="${esercizio.recupero}" data-field="recupero" data-index="${index}"></td>
        <td><textarea data-field="note_personali" data-index="${index}" rows="2" placeholder="Note personali..."></textarea></td>
    `;
    
    // Aggiungi event listeners per salvare automaticamente i dati
    const inputs = row.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => saveWorkoutData());
    });
    
    return row;
}

function saveWorkoutData() {
    if (currentDay === 'cronologia') return;
    
    const workoutKey = `workout_${currentDay}_${workoutDate.value}`;
    const data = {
        day: currentDay,
        date: workoutDate.value,
        exercises: []
    };
    
    const inputs = exercisesTable.querySelectorAll('input, textarea');
    const exerciseData = {};
    
    inputs.forEach(input => {
        const index = input.dataset.index;
        const field = input.dataset.field;
        
        if (!exerciseData[index]) {
            exerciseData[index] = {};
        }
        
        exerciseData[index][field] = input.value;
    });
    
    // Converti in array
    data.exercises = Object.values(exerciseData);
    
    localStorage.setItem(workoutKey, JSON.stringify(data));
}

function loadSavedWorkoutData(day) {
    if (day === 'cronologia') return;
    
    const workoutKey = `workout_${day}_${workoutDate.value}`;
    const savedData = localStorage.getItem(workoutKey);
    
    if (savedData) {
        const data = JSON.parse(savedData);
        
        data.exercises.forEach((exercise, index) => {
            Object.keys(exercise).forEach(field => {
                const input = exercisesTable.querySelector(`[data-field="${field}"][data-index="${index}"]`);
                if (input) {
                    input.value = exercise[field] || '';
                }
            });
        });
    }
}

function saveCurrentWorkout() {
    const date = workoutDate.value;
    if (!date) {
        showMessage('Inserisci una data per salvare l\'allenamento', 'error');
        return;
    }
    
    if (currentDay === 'cronologia') {
        showMessage('Non puoi salvare dalla sezione cronologia', 'error');
        return;
    }
    
    const workoutId = `${currentDay}_${date}_${Date.now()}`;
    const workout = {
        id: workoutId,
        day: currentDay,
        dayName: workoutData[currentDay].nome,
        date: date,
        savedAt: new Date().toISOString(),
        exercises: []
    };
    
    // Raccogli i dati degli esercizi
    const exerciseRows = exercisesTable.querySelectorAll('tr');
    exerciseRows.forEach((row, index) => {
        const exerciseName = row.querySelector('.exercise-name').textContent;
        const inputs = row.querySelectorAll('input, textarea');
        const exerciseData = { nome: exerciseName };
        
        inputs.forEach(input => {
            const field = input.dataset.field;
            exerciseData[field] = input.value;
        });
        
        workout.exercises.push(exerciseData);
    });
    
    // Salva nella cronologia
    let history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    history.unshift(workout);
    localStorage.setItem('workoutHistory', JSON.stringify(history));
    
    showMessage('Allenamento salvato con successo!', 'success');
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    historyList.innerHTML = '';
    
    if (history.length === 0) {
        historyList.innerHTML = '<div class="empty-history">Nessun allenamento salvato</div>';
        return;
    }
    
    history.forEach(workout => {
        const historyItem = createHistoryItem(workout);
        historyList.appendChild(historyItem);
    });
}

function createHistoryItem(workout) {
    const div = document.createElement('div');
    div.className = 'history-item';
    
    const formattedDate = new Date(workout.date).toLocaleDateString('it-IT');
    
    div.innerHTML = `
        <div class="history-item-info">
            <h4>Giorno ${workout.day} - ${formattedDate}</h4>
            <p>${workout.dayName}</p>
        </div>
        <div class="history-item-actions">
            <button class="btn btn--secondary btn--sm" onclick="editWorkout('${workout.id}')">Modifica</button>
            <button class="btn btn--outline btn--sm" onclick="deleteWorkout('${workout.id}')">Elimina</button>
        </div>
    `;
    
    return div;
}

function editWorkout(workoutId) {
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    const workout = history.find(w => w.id === workoutId);
    
    if (!workout) return;
    
    editingWorkoutId = workoutId;
    
    // Popola il modal di modifica
    document.getElementById('edit-date').value = workout.date;
    document.getElementById('edit-day').value = `${workout.day} - ${workout.dayName}`;
    
    const editTable = document.getElementById('edit-exercises-table');
    editTable.innerHTML = '';
    
    workout.exercises.forEach((exercise, index) => {
        const row = createEditExerciseRow(exercise, index);
        editTable.appendChild(row);
    });
    
    editModal.classList.remove('hidden');
}

function createEditExerciseRow(exercise, index) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="exercise-name">${exercise.nome}</td>
        <td><input type="text" value="${exercise.serie_reps || ''}" data-field="serie_reps" data-index="${index}"></td>
        <td><input type="text" value="${exercise.peso_partenza || ''}" data-field="peso_partenza" data-index="${index}"></td>
        <td><input type="text" value="${exercise.peso_usato || ''}" data-field="peso_usato" data-index="${index}"></td>
        <td><input type="text" value="${exercise.serie_effettive || ''}" data-field="serie_effettive" data-index="${index}"></td>
        <td><textarea data-field="note_esercizio" data-index="${index}" rows="2">${exercise.note_esercizio || ''}</textarea></td>
        <td><input type="text" value="${exercise.recupero || ''}" data-field="recupero" data-index="${index}"></td>
        <td><textarea data-field="note_personali" data-index="${index}" rows="2">${exercise.note_personali || ''}</textarea></td>
    `;
    
    return row;
}

function saveEditedWorkout() {
    if (!editingWorkoutId) return;
    
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    const workoutIndex = history.findIndex(w => w.id === editingWorkoutId);
    
    if (workoutIndex === -1) return;
    
    const workout = history[workoutIndex];
    workout.date = document.getElementById('edit-date').value;
    
    // Aggiorna gli esercizi
    const editTable = document.getElementById('edit-exercises-table');
    const exerciseRows = editTable.querySelectorAll('tr');
    
    exerciseRows.forEach((row, index) => {
        const exerciseName = row.querySelector('.exercise-name').textContent;
        const inputs = row.querySelectorAll('input, textarea');
        const exerciseData = { nome: exerciseName };
        
        inputs.forEach(input => {
            const field = input.dataset.field;
            exerciseData[field] = input.value;
        });
        
        workout.exercises[index] = exerciseData;
    });
    
    localStorage.setItem('workoutHistory', JSON.stringify(history));
    closeModal();
    loadHistory();
    showMessage('Allenamento modificato con successo!', 'success');
}

function deleteWorkout(workoutId) {
    if (!confirm('Sei sicuro di voler eliminare questo allenamento?')) return;
    
    let history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    history = history.filter(w => w.id !== workoutId);
    localStorage.setItem('workoutHistory', JSON.stringify(history));
    
    loadHistory();
    showMessage('Allenamento eliminato', 'success');
}

function closeModal() {
    editModal.classList.add('hidden');
    editingWorkoutId = null;
}

function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const date = new Date(workoutDate.value).toLocaleDateString('it-IT');
    
    doc.setFontSize(20);
    doc.text('Piano di Allenamento', 20, 30);
    
    doc.setFontSize(16);
    doc.text(`Giorno ${currentDay} - ${workoutData[currentDay].nome}`, 20, 45);
    doc.text(`Data: ${date}`, 20, 55);
    
    let yPos = 75;
    doc.setFontSize(12);
    
    const exerciseRows = exercisesTable.querySelectorAll('tr');
    exerciseRows.forEach((row, index) => {
        const exerciseName = row.querySelector('.exercise-name').textContent;
        const pesoUsato = row.querySelector('[data-field="peso_usato"]').value;
        const serieEffettive = row.querySelector('[data-field="serie_effettive"]').value;
        const notePersonali = row.querySelector('[data-field="note_personali"]').value;
        
        doc.text(`${index + 1}. ${exerciseName}`, 20, yPos);
        yPos += 8;
        
        if (pesoUsato) {
            doc.text(`   Peso: ${pesoUsato}`, 20, yPos);
            yPos += 6;
        }
        
        if (serieEffettive) {
            doc.text(`   Serie: ${serieEffettive}`, 20, yPos);
            yPos += 6;
        }
        
        if (notePersonali) {
            doc.text(`   Note: ${notePersonali}`, 20, yPos);
            yPos += 6;
        }
        
        yPos += 4;
        
        if (yPos > 250) {
            doc.addPage();
            yPos = 30;
        }
    });
    
    doc.save(`allenamento-${currentDay}-${workoutDate.value}.pdf`);
    showMessage('PDF esportato con successo!', 'success');
}

function exportToExcel() {
    const wb = XLSX.utils.book_new();
    const data = [];
    
    // Intestazioni
    data.push([
        'Esercizio',
        'Serie/Reps',
        'Peso partenza',
        'Peso usato',
        'Serie effettive',
        'Note esercizio',
        'Recupero(s)',
        'Note personali'
    ]);
    
    // Dati degli esercizi
    const exerciseRows = exercisesTable.querySelectorAll('tr');
    exerciseRows.forEach(row => {
        const rowData = [];
        rowData.push(row.querySelector('.exercise-name').textContent);
        
        const inputs = row.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            rowData.push(input.value);
        });
        
        data.push(rowData);
    });
    
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, `Giorno ${currentDay}`);
    
    XLSX.writeFile(wb, `allenamento-${currentDay}-${workoutDate.value}.xlsx`);
    showMessage('Excel esportato con successo!', 'success');
}

function exportHistoryToExcel() {
    const history = JSON.parse(localStorage.getItem('workoutHistory') || '[]');
    
    if (history.length === 0) {
        showMessage('Nessun allenamento da esportare', 'error');
        return;
    }
    
    const wb = XLSX.utils.book_new();
    
    history.forEach(workout => {
        const data = [];
        data.push([
            `Giorno ${workout.day} - ${workout.dayName}`,
            `Data: ${new Date(workout.date).toLocaleDateString('it-IT')}`
        ]);
        data.push([]);
        data.push([
            'Esercizio',
            'Serie/Reps',
            'Peso partenza',
            'Peso usato',
            'Serie effettive',
            'Note esercizio',
            'Recupero(s)',
            'Note personali'
        ]);
        
        workout.exercises.forEach(exercise => {
            data.push([
                exercise.nome,
                exercise.serie_reps || '',
                exercise.peso_partenza || '',
                exercise.peso_usato || '',
                exercise.serie_effettive || '',
                exercise.note_esercizio || '',
                exercise.recupero || '',
                exercise.note_personali || ''
            ]);
        });
        
        const ws = XLSX.utils.aoa_to_sheet(data);
        const sheetName = `${workout.day}_${workout.date}`.replace(/[:/\\?*\[\]]/g, '_');
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });
    
    XLSX.writeFile(wb, 'cronologia-allenamenti.xlsx');
    showMessage('Cronologia esportata con successo!', 'success');
}

function backupData() {
    const data = {
        workoutHistory: JSON.parse(localStorage.getItem('workoutHistory') || '[]'),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-allenamenti-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showMessage('Backup creato con successo!', 'success');
}

function restoreData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.workoutHistory) {
                if (confirm('Questo ripristinerà tutti i dati. Continuare?')) {
                    localStorage.setItem('workoutHistory', JSON.stringify(data.workoutHistory));
                    loadHistory();
                    showMessage('Dati ripristinati con successo!', 'success');
                }
            } else {
                showMessage('File di backup non valido', 'error');
            }
        } catch (error) {
            showMessage('Errore nel leggere il file di backup', 'error');
        }
    };
    
    reader.readAsText(file);
    
    // Reset del file input
    event.target.value = '';
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `status-message ${type}`;
    messageDiv.textContent = message;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}