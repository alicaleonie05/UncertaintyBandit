// copy all rewards and stuff from predrawn txt file
// if this is changed, then also change the belonging sequence in python data!
const sequenceOfExperimentsString = ['EEmaxPractice', 'EEmax', 'EEminPractice', 'EEmin']
// CHANGE THIS FOR DIFFERENT REWARD SEQs
const EEPractice = {"filename":"Practice","rewards":[[[58,58,56,60,61,59,59,54,56,54,58,60,64,59,61,54,60,60,59,54],[43,57,56,48,50,41,55,58,42,50,40,57,52,42,56,59,46,45,56,47]],[[45,45,49,42,49,42,58,58,46,58,43,58,50,59,56,43,49,40,49,43],[43,44,44,45,40,43,35,45,45,46,41,42,39,43,40,45,43,47,40,47]]],"means":[[58,50],[50,42]],"fixedVariances":[[8,40],[40,8]],"practice":true}
const EEmax = {"filename":"EEmax","rewards":[[[51,39,51,50,49,42,38,48,57,54,39,48,46,53,44,46,59,54,50,61],[49,36,37,53,32,38,41,39,41,43,44,44,34,49,37,31,38,52,43,48]],[[57,62,56,59,53,55,50,54,56,56,60,59,53,52,56,51,53,57,58,57],[55,52,57,54,56,55,55,52,55,58,51,62,53,56,58,57,54,59,53,56]],[[46,33,52,46,46,48,33,44,43,50,53,39,34,52,41,43,36,36,48,38],[52,51,52,51,53,56,46,50,52,49,53,53,50,51,47,48,52,48,55,48]],[[46,53,52,52,46,41,35,53,40,49,49,36,42,38,45,34,43,50,47,56],[45,44,49,43,40,46,43,44,40,46,46,50,43,45,44,51,46,44,42,46]],[[41,44,41,42,37,39,42,46,41,39,40,44,39,43,41,42,38,47,40,42],[50,51,48,46,50,47,48,46,50,49,43,52,50,51,52,51,51,49,48,55]],[[42,43,39,45,41,44,42,45,39,41,39,44,44,42,39,36,46,44,46,42],[41,42,30,48,51,42,43,53,41,48,33,46,34,45,41,53,50,42,42,34]],[[51,55,54,52,53,53,49,47,51,45,54,53,49,53,57,58,54,53,54,51],[58,57,54,55,53,49,56,55,52,56,57,53,54,49,55,55,54,56,47,51]],[[42,45,54,61,50,47,53,54,48,44,66,56,53,54,60,49,49,53,49,41],[37,43,49,45,42,48,46,44,44,41,46,48,42,44,45,48,38,46,41,43]],[[55,51,46,53,54,51,50,46,50,47,56,51,54,50,47,48,53,50,55,51],[52,35,49,48,43,35,50,51,45,41,38,47,46,41,44,52,42,41,43,26]],[[49,54,49,50,52,56,50,56,51,50,54,58,52,51,50,55,49,47,53,49],[39,45,48,46,48,40,46,43,42,44,46,48,43,46,42,45,42,39,46,44]],[[39,42,43,40,43,42,43,36,45,40,46,43,42,44,41,43,37,47,44,44],[45,51,53,61,53,44,47,62,59,52,50,47,65,52,49,47,51,55,39,45]],[[39,41,43,40,43,46,49,38,37,41,40,45,43,44,40,39,40,48,41,41],[29,41,44,43,42,41,38,54,39,43,50,49,44,46,37,45,40,46,34,29]],[[41,54,43,41,48,47,35,50,35,52,31,50,38,40,52,39,39,51,43,47],[46,36,48,52,45,35,35,54,44,47,36,50,50,43,51,49,46,41,44,30]],[[32,47,45,46,44,52,34,46,42,39,41,42,37,51,42,52,50,31,44,50],[53,58,50,49,49,39,53,42,44,49,64,52,55,43,52,51,58,40,54,51]],[[54,43,55,52,57,58,51,60,59,42,54,42,54,50,49,48,45,53,60,65],[49,52,56,52,51,53,52,51,50,53,57,55,56,55,51,51,50,51,47,50]],[[40,43,46,32,48,53,50,39,40,41,43,47,32,54,41,51,45,49,35,43],[47,47,35,35,36,51,42,43,50,38,38,52,36,49,33,49,47,50,51,45]]],"means":[[49,55,43,45,42,43,53,52,51,52,43,42,44,43,53,44],[41,55,51,45,50,43,53,44,43,44,51,42,44,51,53,44]],"fixedVariances":[[40,40],[8,8],[40,8],[40,8],[8,8],[8,40],[8,8],[40,8],[8,40],[8,8],[8,40],[8,40],[40,40],[40,40],[40,8],[40,40]],"practice":false}
const EEmin = {"filename":"EEmin","rewards":[[[42,43,39,43,35,46,42,42,42,41,44,38,41,36,46,44,42,40,42,41],[53,48,51,48,52,54,48,50,51,52,49,48,48,51,51,47,52,54,58,51]],[[47,41,45,41,40,44,41,43,43,45,44,38,43,40,43,46,40,39,41,48],[48,47,57,45,57,61,48,45,54,60,56,54,47,65,46,54,48,48,40,52]],[[51,49,53,57,52,53,51,57,51,51,49,50,54,52,55,56,57,50,50,52],[41,47,38,46,44,47,43,45,42,41,42,39,43,46,46,49,45,43,43,47]],[[45,43,53,49,34,52,50,45,49,53,37,33,46,39,52,44,40,48,55,46],[47,46,49,42,46,46,47,45,50,44,46,40,46,48,44,46,46,40,46,44]],[[36,45,47,46,32,42,43,35,38,54,52,47,40,34,44,52,35,49,49,38],[56,49,44,45,42,61,41,54,53,49,44,64,51,43,57,45,47,48,56,55]],[[51,53,54,56,53,54,48,57,53,53,51,53,51,51,50,48,57,56,52,57],[53,53,51,53,54,45,53,50,57,51,50,52,48,55,59,49,54,55,52,54]],[[34,39,55,45,43,47,53,40,39,40,39,53,41,44,35,44,47,54,39,34],[48,51,46,50,56,50,51,50,46,50,57,52,48,49,48,50,53,55,52,53]],[[40,40,46,42,41,40,46,44,40,43,47,39,41,42,44,45,47,40,40,41],[39,41,40,41,41,44,26,50,43,45,42,49,32,48,46,42,40,32,32,47]],[[54,55,53,58,57,59,53,52,52,57,54,53,53,56,61,57,60,52,55,54],[61,58,54,56,54,58,58,52,56,55,59,55,55,52,52,51,56,53,54,58]],[[39,48,46,57,52,39,43,57,44,50,35,57,49,41,56,55,52,48,49,48],[43,35,49,46,51,30,36,43,39,37,47,42,40,53,40,38,30,38,48,34]],[[56,63,48,58,58,45,49,57,47,48,60,61,51,44,55,54,62,53,47,43],[49,53,52,55,52,52,53,57,49,49,55,48,56,53,55,58,54,52,52,55]],[[45,44,41,43,41,39,42,46,44,45,43,43,42,48,38,43,42,44,45,50],[50,41,36,46,48,46,37,38,30,46,42,58,49,47,40,48,36,35,41,44]],[[53,47,39,52,47,38,39,53,41,38,46,51,49,37,40,34,52,43,55,43],[51,49,45,40,35,54,42,37,40,49,55,41,56,43,44,49,38,47,42,35]],[[42,47,40,40,32,42,36,41,53,52,42,50,53,42,34,53,47,42,43,34],[46,47,35,49,41,51,49,34,52,49,40,39,36,48,52,45,36,34,48,52]],[[52,45,49,50,51,48,52,52,53,54,48,47,53,56,52,51,53,48,54,52],[50,52,43,40,46,36,54,38,45,49,43,43,44,31,56,40,34,39,44,46]],[[47,54,48,60,47,48,53,60,40,46,60,51,58,50,49,56,48,52,37,59],[44,47,44,43,43,40,44,46,41,42,45,48,45,44,41,46,45,48,40,40]]],"means":[[42,43,52,45,43,53,43,42,55,49,53,43,44,44,51,52],[50,51,44,45,51,53,51,42,55,41,53,43,44,44,43,44]],"fixedVariances":[[8,8],[8,40],[8,8],[40,8],[40,40],[8,8],[40,8],[8,40],[8,8],[40,40],[40,8],[8,40],[40,40],[40,40],[8,40],[40,8]],"practice":false}

let participant_id = null;
var startTime;
var saveDataFlag = false;

var blueSlotAttention;
var gameNumberAttention;
var slotNumberAttentionVar; 

const EEmaxPractice = {
    "filename":"EEmaxPractice",
    "rewards": [EEPractice.rewards[0]],
    "means":[[EEPractice.means[0][0]], [EEPractice.means[1][0]]],
    "fixedVariances":[EEPractice.fixedVariances[0]],
    "practice":true
}

const EEminPractice = {
    "filename":"EEminPractice",
    "rewards":[EEPractice.rewards[1]],
    "means":[[EEPractice.means[0][1]], [EEPractice.means[1][1]]],
    "fixedVariances":[EEPractice.fixedVariances[1]],
    "practice":true
}

// number of games for practice games and real experiment
// at the end  put 1 and 16 and 20 accordingly
const numberOfGamesPractice = 1
const numberOfGamesExperiment = 16
const numberOfTrials = 20


// if this is changed, then also change the belonging sequence in python data!
const sequenceOfExperiments = [EEmaxPractice, EEmax, EEminPractice, EEmin]
const experimentOrder = [].concat(...shuffleArray([[0,1],[2,3]])) 

// create lists of all parameters needed to setup bandit
const AllNumberOfGames = [numberOfGamesPractice, numberOfGamesExperiment, numberOfGamesPractice, numberOfGamesExperiment]
const AllNextBlocks = experimentOrder.map((index) => ['practice1', 'instruction1', 'practice2', 'instruction2'][index]);
AllNextBlocks.push('end')

const AllFilenames = experimentOrder.map((index) => sequenceOfExperiments.flatMap(obj => [obj.filename])[index]);
const AllRewards = experimentOrder.map((index) =>sequenceOfExperiments.flatMap(obj => [obj.rewards])[index]);
const AllMeans = experimentOrder.map((index) =>sequenceOfExperiments.flatMap(obj => [obj.means])[index]);
const AllFixedVariances = experimentOrder.map((index) => sequenceOfExperiments.flatMap(obj => [obj.fixedVariances])[index]);
const AllPractices = experimentOrder.map((index) =>sequenceOfExperiments.flatMap(obj => [obj.practice])[index]);
const buttonNumbers = experimentOrder.filter((_, index) => index % 2 == 0).map(element => (element / 2)+1);
const AllBlockIndices = [0,0,1,1]
const AllRandomNumbersTrial = [];
const AllRandomNumbers = [];

// create random numbers for attention check
for (i in [0,1]){
    const arn = Math.floor(Math.random() * (numberOfGamesExperiment-3)) + 2;
    AllRandomNumbers.push(arn);
    AllRandomNumbers.push(arn);
}
for (i in [0,1]){
    const arnt = Math.floor(Math.random() * (numberOfTrials)) + 1;
    AllRandomNumbersTrial.push(arnt);
    AllRandomNumbersTrial.push(arnt);
}

var totalDivsOffset = 4;
$(document).ready(function() {  
    let displayedDivs = 0;
    $("#displayedDivs").html(displayedDivs);
    startTime = Date.now()
    participant_id = new URLSearchParams(window.location.search).get('pID')
    updateProgressBar(0, 8);

});


function clickStartGame0(hide) {
    $("#"+hide).hide();
    // start games
    if (hide === "game_instruction"){
        $("#"+AllNextBlocks[0]).show();
        let displayedDivs = parseInt($("#displayedDivs").html())
        const totalDivs = $(".displayed-div").length+ $(".instruction-div").length-1+1;
        displayedDivs++;
        $("#displayedDivs").html(displayedDivs);
        updateProgressBar(displayedDivs, totalDivs);
    }
    // save data and redirect to next webpage
    else if (hide === "end"){
        time_taken();
        $("#DataSaving").show();
        setTimeout(redirect, 2000)
    }
}

function redirect(){
    window.location.href = "../questionnaires_experiment/index.html?pID="+participant_id
}


// clickstart button to interactively switch between games and instructions
function clickStart(hide, show) {
    $("#"+hide).hide();
    $("#"+show).show();
    $("#progressContainer").show();
    window.scrollTo(0, 0);
    if (show == "game") {
        if (hide == AllNextBlocks[0]) {
            $("#"+hide).show();
            $("#practiceButton"+buttonNumbers[0]).hide();
            startExperiment(0);
        }
        if (hide == AllNextBlocks[1]) {
            $("#"+AllNextBlocks[0]).hide();
            startExperiment(1);
        }
        if (hide == AllNextBlocks[2]) {
            startExperiment(2);
            $("#"+hide).show();
            $("#practiceButton"+buttonNumbers[1]).hide();
        }
        if (hide == AllNextBlocks[3]) {
            $("#"+AllNextBlocks[2]).hide();
            startExperiment(3)
        }
    }
    else if (((show == 'page2') && (hide == 'page3'))|| ((show == 'page3') && (hide == 'page4'))){
        let displayedDivs = parseInt($("#displayedDivs").html())
        const totalDivs = $(".displayed-div").length+$(".instruction-div").length-1+1;
        displayedDivs--;
        $("#displayedDivs").html(displayedDivs);
        updateProgressBar(displayedDivs, totalDivs);
    }
    else {
        let displayedDivs = parseInt($("#displayedDivs").html())
        var totalDivs = $(".displayed-div").length+$(".instruction-div").length-1+1;
        displayedDivs++;
        $("#displayedDivs").html(displayedDivs);
        updateProgressBar(displayedDivs, totalDivs);
    }

    
    // function for starting the experiments
    function startExperiment(experimentNumber) {
        // Clear the game container and attention check container
        const gameContainer = $('#game');
        const attentionCheck = $('#attention-check')
        gameContainer.empty();
        attentionCheck.empty();
     
        // Get experiment-specific data
        const experimentData = getExperimentData(experimentNumber);

        // Create an instance of TwoArmedBandit based on the experiment data
        const twoArmedBandit = new TwoArmedBandit(experimentData);

        // Append the game display to the game container and create buttons and stuff
        gameContainer.append(twoArmedBandit.setupGameDisplay());
        attentionCheck.append(twoArmedBandit.setupAttentionDisplay());
        twoArmedBandit.setupEventListeners();
        }
}



// get the correct data for the experiment
function getExperimentData(experimentNumber) {
    return {
        rewards : AllRewards[experimentNumber],
        means : AllMeans[experimentNumber],
        fixedVariances : AllFixedVariances[experimentNumber],
        _filename_ : AllFilenames[experimentNumber],
        blockIdx : AllBlockIndices[experimentNumber],
        numberOfGames : AllNumberOfGames[experimentNumber],
        practice : AllPractices[experimentNumber],
        nextBlock : AllNextBlocks[experimentNumber+1],
        randomNumber : AllRandomNumbers[experimentNumber],
        randomNumberTrial : AllRandomNumbersTrial[experimentNumber],
        participant_id : participant_id
        }
}








// define a class for the TwoArmedBandit task
class TwoArmedBandit {
    constructor(experimentData) {
        // instantiate class with initial values for properties from experiment data
        this.rewards = experimentData.rewards;
        this.means = experimentData.means;
        this.fixedVariances = experimentData.fixedVariances;
        this._filename_ = experimentData._filename_;
        this.numberOfGames = experimentData.numberOfGames;
        this.practice = experimentData.practice;
        this.nextBlock = experimentData.nextBlock;
        this.randomNumber = experimentData.randomNumber;
        this.randomNumberTrial = experimentData.randomNumberTrial;
        this.blockIdx = experimentData.blockIdx;
        this.participant_id = experimentData.participant_id;
        this.minmaxRewards = get_min_max_rewards(this.means, numberOfTrials, this.practice) // for saving the bonus, this bonus is not used in the end since when missing data its calculated on the partial data
        this.filedataGame = []
        if ((this._filename_ === 'EEmax')||(this._filename_ === 'EEmaxPractice')){	
            this.rewardCounter = 0}
        else if ((this._filename_ === 'EEmin') || (this._filename_ === 'EEminPractice')){
            this.rewardCounter = this.minmaxRewards[1]}
        else {console.log('block not implemented, l246 experiment.js')}

        // Initialize the game display
        this.gameDisplay = $('#game');
        this.attentionDisplay = $('#attention-check');

        // initialize time variable for reaction time
        this.timeVar = performance.now();
        this.rt_choice = 0;

        this.blueSlot = null;

        // initialize the counter of chosen slots to ensure every subjects sees same reward sequence
        this.slotsChosen = [0,0]

        // Initialize the time durations for showing rewards and showing nextTrialMessage
        this.timeNextTrial = 200;
        this.timeReward = 600;

        // Shuffle the games (not used for now cause we fix game seqs)
        this.gameIndices = Array.from({ length: this.numberOfGames }, (_, index) => index);

        // Initialize reward in progress flag
        this.rewardInProgress = false;

        // initialize trial and game number
        this.trialNumber = 1;
        this.gameNumber = 0;
        this.slotNumberChoice = 0;

        // Bind methods to the instance
        this.handleQuestionMarkClick = this.handleQuestionMarkClick.bind(this);
        this.startNextTrial = this.startNextTrial.bind(this);
        this.revealReward = this.revealReward.bind(this);
        this.showGameEnd = this.showGameEnd.bind(this);
        this.showEndBlock = this.showEndBlock.bind(this);
        this.startNextGame = this.startNextGame.bind(this);
        this.setupGameDisplay = this.setupGameDisplay.bind(this);
        this.setupAttentionDisplay = this.setupAttentionDisplay.bind(this);
        this.setupEventListeners = this.setupEventListeners.bind(this);
        
        // this is extra for arm identification (not used anymore only for attnetion check)
        this.saveChoice = this.saveChoice.bind(this);
        this.startNextAfterChoice = this.startNextAfterChoice.bind(this);
        this.showGameEndAfterChoice = this.showGameEndAfterChoice.bind(this);
        this.showEndBlockAfterChoice = this.showEndBlockAfterChoice.bind(this);
        this.handleQuestionMarkChoice = this.handleQuestionMarkChoice.bind(this);
        this.handleQuestionMarkAttention = this.handleQuestionMarkAttention.bind(this);
        this.handleConfirmAttention = this.handleConfirmAttention.bind(this)
    }


    

    // define function when slot is clicked
    handleQuestionMarkClick(slotNumber) {
        if (!this.rewardInProgress) {
           
            // Calculate reaction time for choice
            this.rt_choice = performance.now() - this.timeVar;
            this.timeVar = performance.now(); // Update timeVar for next RT
            
            // Update rewardInProgress flag and save it in the instance
            this.rewardInProgress = true;
            // Reveal the reward by calling revealReward method
            this.revealReward(slotNumber);
    
        }
    }   

    // update trial
    startNextTrial() {
        this.trialNumber = this.trialNumber+1;
        $('#trialCounter').text(`Trial Number: ${this.trialNumber}`);
    }

    // reveal reward
    revealReward(slotNumber) {
        const rewardDisplay = $(`#slot${slotNumber} .reward`);
        const rewardSpan = $(`#slot${slotNumber} .reward span`);
        const mean = slotNumber === 1 ? this.means[0][this.gameNumber] : this.means[1][this.gameNumber];
        const variance = slotNumber === 1 ? this.fixedVariances[this.gameNumber][0] : this.fixedVariances[this.gameNumber][1];
        const reward = this.rewards[this.gameNumber][slotNumber - 1][this.slotsChosen[slotNumber - 1]];
        ((this._filename_ === 'EEmax') || (this._filename_ === 'EEmaxPractice')) ? this.rewardCounter+= reward : this.rewardCounter-= reward;
        
        $('#currentRewardCounter').text(`${this.rewardCounter}`);
        // update slot counter
        this.slotsChosen[slotNumber - 1] = this.slotsChosen[slotNumber - 1] + 1;
        
        // show reward
        this._filename_ === 'EEmax' || this._filename_ === 'EEmaxPractice' ? rewardSpan.text(reward) : rewardSpan.text(-reward);
        rewardDisplay.show();
        
        // Hide the reward after a certain duration
        setTimeout(() => {
            rewardDisplay.hide();
            this.rewardInProgress = false;
        
            // Show "Next trial" message after a short delay
            setTimeout(() => {
                $('#choices').hide();
                $('#trialCounter').hide();
                if (this.gameNumber <= this.numberOfGames - 1 && this.trialNumber < numberOfTrials) {
                    $('#nextTrialMessage').show();   
                } 
                // Show the bandits and trial counter after "Next trial" message
                setTimeout(() => {
                    $('#nextTrialMessage').hide();
                    if (this.trialNumber < numberOfTrials) {
                        this.startNextTrial();
                        $('#choices').show();
                        $('#trialCounter').show();
                    } else {
                        if (this.gameNumber === this.randomNumber && this.practice===false){
                            $("#game").hide();
                            $('#attention-choice').show();// here changed
                            this.randomNumber = null;}
                        else if (this.gameNumber < this.numberOfGames - 1) {
                            this.showGameEnd();
                        } else if (this.gameNumber === this.numberOfGames - 1) {
                            this.showEndBlock();
                            }
                    }
                }, this.timeNextTrial);
            }, 0);
        }, this.timeReward);



        // get gameIndex from shuffled Index Array to save it to data for identification of game - remove the shuffling for now
        const gameIndex = this.gameNumber;

        // only one decimal digit for reaction time
        let reactionTime = this.rt_choice.toFixed(1);

        // if not first trial substract the delay times from the setTimeout()s
        if (this.trialNumber!=1){
            reactionTime = (this.rt_choice - (this.timeNextTrial+this.timeReward)).toFixed(1)
        }
        // if first trial just take it plain
        else{
        }

        // get game and trialNumber to save it to JSON
        const gameNumber = this.gameNumber
        const trialNumber = this.trialNumber
        const practice = this.practice
        const block = this._filename_
        const pID = this.participant_id
        const blockIdx = this.blockIdx

        // write data to JSON file
        const datatoJSON = {
            pID,
            blockIdx,
            block,
            gameNumber,
            //gameIndex,
            trialNumber,
            slotNumber,
            reward,
            reactionTime,
            practice
        };
        this.filedataGame[trialNumber-1] = datatoJSON;
    }

    // attention display
    setupAttentionDisplay() {
        const attentionDisplay = this.attentionDisplay;
        const blueSlot = Math.floor(Math.random() * 2) + 1;
        this.blueSlot = blueSlot;
        const slotMachine1 = $('<div class="slot-machine" id="attention-slot' + 1 + '"></div>');
        const slotMachine2 = $('<div class="slot-machine" id="attention-slot' + 2 + '"></div>');
        const questionMark1 = $('<div class="question-mark-attention">?</div>');
        const questionMark2 = $('<div class="question-mark-attention">?</div>');
        if (blueSlot===1){
            slotMachine1.css("background-color", "blue");  
        }
        else{  
            slotMachine2.css("background-color", "blue");
        }             
        slotMachine1.append(questionMark1);
        slotMachine2.append(questionMark2);
        attentionDisplay.append(slotMachine1);
        attentionDisplay.append(slotMachine2);
        this.attentionDisplay = attentionDisplay;
        }

    // define function for starting next game
    startNextGame() {
        this.filedataGame = []
        this.timeVar = performance.now(); // Update timeVar for next RT
        this.trialNumber = 1; // Reset trial counter
        this.gameNumber = this.gameNumber + 1; // Update game counter
        $('#currentGameCounter').text(`${this.numberOfGames-this.gameNumber}`);
        this.slotsChosen = [0,0] // Reset slot counter
        $('#gameEndContainer').hide(); // Hide game end message
        $('#nextGameMessage').hide(); // Hide game end message
        $('#nextGameButton').hide(); // Hide "Next Game" button
        $('#trialCounter').text(`Trial Number: ${this.trialNumber}`).show(); // Reset trial counter
        $('#choices').show(); // Show the bandits for the next game
    

      }

    // define function for end of each game      
    showGameEnd() {
        $('#choices').hide(); // Hide the bandits
        $('#trialCounter').hide(); // Hide trial counter
        $('#nextTrialMessage').hide(); // Hide "Next trial" message
        saveData(this.filedataGame);//json stringify vorher here. 
        checkDataSaving();
        $('#gameEndContainer').show(); // Show game end message
        $('#nextGameMessage').show(); // Show game end message
        $('#nextGameButton').show(); // Show "Next Game" button 
        }

    // define function for end of each block
    showEndBlock(){
        $('#choices').hide(); // Hide the bandits
        $('#trialCounter').hide(); // Hide trial counter
        $('#nextTrialMessage').hide(); // Hide "Next trial" message
        $('#gameEndContainer').hide(); // Show game end message
        $('#nextGameMessage').hide(); // Show game end message
        $('#nextGameButton').hide(); // Show "Next Game" button
        saveData(this.filedataGame)
        checkDataSaving();
        if (this.practice === false){
            const pID = this.participant_id
            const rewardDiff = this.minmaxRewards[1]-this.minmaxRewards[0]
            if (this.rewardCounter < 0){
                this.rewardCounter = 0
                }
            let prop_correct;
            if ((this._filename_ === 'EEmax')||(this._filename_ === 'EEmaxPractice')){
                prop_correct = Math.round(100*(this.rewardCounter-this.minmaxRewards[0])/rewardDiff)/100}
                if (prop_correct > 1){prop_correct = 1}
            else if ((this._filename_ === 'EEmin') || (this._filename_ === 'EEminPractice')){
                prop_correct = Math.round(100*this.rewardCounter/rewardDiff)/100}
                if (prop_correct > 1){prop_correct = 1}
            const bonusSaved = {pID, prop_correct}
            saveBonus(bonusSaved, this._filename_)
            checkDataSaving();
        }
            $('#nextBlockContainer').show(); // Show block end message
            $('#nextBlockMessage').show(); // Show next block message
            $('#nextBlockButton').show(); // Show next block button            
        }


    // define function for setting up the game display
    setupGameDisplay() {
        if (this.practice===false){
            $("#progressContainer").hide()
        }
        // Get the game display
        const gameDisplay = this.gameDisplay;  

        // Create trial counter and next trial message and append it to game display
        const trialCounter = $('<p class="trial-counter" id="trialCounter">Trial Number: <span id="currentTrialNumber">1</span></p>');
        const nextTrialMessage = $('<div id="nextTrialMessage" style="display: none;">Next Trial</div>');
        gameDisplay.append(trialCounter);
        gameDisplay.append(nextTrialMessage);        

        // Create choices container
        const choicesContainer = $('<div class="choices-container" id="choices"></div>');
    
        // Create slot machines with question marks and reward displays
        for (let i = 1; i <= 2; i++) {
            const slotMachine = $('<div class="slot-machine" id="slot' + i + '"></div>');
            let questionMark;
            if (i===1){
                questionMark = $('<div class="question-mark">&larr;</div>');
            }
            else if (i===2){
                questionMark = $('<div class="question-mark">&rarr;</div>');
            }
            let rewardDisplay;
            rewardDisplay = $('<div class="reward" style="display: none;">Points: <span id="reward' + i + '"></span></div>');

            slotMachine.append(questionMark);
            slotMachine.append(rewardDisplay);
    
            choicesContainer.append(slotMachine);
        }
    
        // Append choices container to game display
        gameDisplay.append(choicesContainer);

        if (this.practice === false){
            const rewardCounter = $('<p class="reward-counter" id="rewardCounter"><b>Games left: <span id="currentGameCounter">16 </span></b> &nbsp;&nbsp;<b>Points: <span id="currentRewardCounter"> </span></b></p>');
            gameDisplay.append(rewardCounter)   
        }
        else{
            const rewardCounter = $('<p class="reward-counter" id="rewardCounter"><b>Games left: <span id="currentGameCounter">1 </span></b> &nbsp;&nbsp;<b>Points: <span id="currentRewardCounter"> </span></b></p>');
            gameDisplay.append(rewardCounter)   
            } 
    
        // Create GameEndContainer with nextGameMessage and nextGameButton and append it nested to game display 
        const gameEndContainer = $('<div id="gameEndContainer"></div>');
        const nextGameMessage = $('<div id="nextGameMessage" style="display: none;">Game Finished</div>');
        const nextGameButton = $('<button type="button" class="default_button" id="nextGameButton" style="display: none;">Next Game</button>');
        gameEndContainer.append(nextGameMessage);
        gameEndContainer.append(nextGameButton);
        gameDisplay.append(gameEndContainer);
    

        // Create BlockEndContainer with nextBlockMessage and nextBlockButton and append it nested to game display
        const blockEndContainer = $('<div id="blockEndContainer"></div>');

        let nextBlockButton;
        let nextBlockMessage;

        if (this.practice === false){
        const nextBlockMessage = $('<div id="nextBlockMessage" style="display: none;">Block finished</div>');
        const nextBlockButton = $('<button type="button" class="default_button" id="nextBlockButton" style="display: none;">Continue to Next Game</button>');
        blockEndContainer.append(nextBlockMessage);
        blockEndContainer.append(nextBlockButton);
        }
        else{
            const nextBlockButton = $('<button type="button" class="default_button" id="nextBlockButton" style="display: none;">Finish Practice</button>');
            blockEndContainer.append(nextBlockMessage);
            blockEndContainer.append(nextBlockButton);
        } 
        gameDisplay.append(blockEndContainer);
        // update gameDisplay of class
        this.gameDisplay = gameDisplay;
    }

    
    // define function to set up event listerners
    setupEventListeners() {
        const self = this; // To capture the context within event handlers

        // Add event listener for clicks on question marks
        // Handle key presses
        $(document).off('keydown').on('keydown', function(event) {
            if ($('.question-mark').is(':visible')) {
                if (event.key === 'ArrowLeft') {
                    // Handle the left arrow key press (left slot machine selection)
                    self.handleQuestionMarkClick(1);
                } else if (event.key === 'ArrowRight') {
                    // Handle the left arrow key press (right slot machine selection)
                    self.handleQuestionMarkClick(2);
                }
            } else if ($('.question-mark-attention').is(':visible')) {
                if (event.key === 'ArrowLeft') {
                    // Handle the right arrow key press (left slot machine selection)
                    self.handleQuestionMarkAttention(1);
                } else if (event.key === 'ArrowRight') {
                    // Handle the right arrow key press (right slot machine selection)
                    self.handleQuestionMarkAttention(2);
                }
            }
        });
        
        // Add event listener for clicks on next game button
        $('#nextGameButton').on('click', function() {
            self.startNextGame();
        });

        //Add event listener for clicks on next block button
        $('#nextBlockButton').on('click', function() {
            clickStart('game', self.nextBlock);
        });

        // add event listener for clicks on confirm choice button
        $('#attentionConfirmButton').off('click').on('click', function() {
          self.handleConfirmAttention();  
        })

        // these two are for arm identification condition
        // add event listener for clicks on question marks for final choice
        $('.question-mark-choice').on('click', function() {
            const slotNumberChoice = parseInt($(this).parent().attr('id').replace('slot', ''));
            self.handleQuestionMarkChoice(slotNumberChoice);
        });
        // add event listener for clicks on confirm choice button
        $('#choiceConfirmButton').on('click', function() {
            self.saveChoice();
            self.startNextAfterChoice();
        })
    }



    handleQuestionMarkAttention(slotNumberAttention){
        $("#attentionConfirmButtonContainer").show()
        slotNumberAttentionVar = slotNumberAttention
        gameNumberAttention = this.gameNumber
        blueSlotAttention = this.blueSlot
    }

    handleConfirmAttention(){
        this.rt_choice = performance.now() - this.timeVar;
        this.timeVar = performance.now(); // Update timeVar for next RT
        const dataAttention = {
            pID : this.participant_id,
            block: this._filename_,
            gameNumber : gameNumberAttention,
            slotNumber : slotNumberAttentionVar,
            reactionTime : this.rt_choice,
            blueSlot : blueSlotAttention,
        }

        if (this.practice === false){
            saveAttentionCheck(dataAttention)
            checkDataSaving();
        }
        $("#attentionConfirmButtonContainer").hide()
        $('#attention-choice').hide();
        $('#game').show();
        if (gameNumberAttention < this.numberOfGames - 1) {
            this.showGameEnd();}
        else if (gameNumberAttention === this.numberOfGames - 1) {
            this.showEndBlock();

        }
        
    }


    // extra functions needed for arm identification and attention check
    // handle question mark of final choice after arm identification
    handleQuestionMarkChoice(slotNumberChoice){
        // show selected arm and hide the other one
        if (slotNumberChoice===1){
            $(`#slot${1} .selectedArm`).show();
            $(`#slot${1} .selectedArm span`).html(' ');
            $(`#slot${2} .selectedArm`).hide();
        }
        else if (slotNumberChoice===2){
            $(`#slot${2} .selectedArm`).show();
            $(`#slot${2} .selectedArm span`).html(' ');
            $(`#slot${1} .selectedArm`).hide();
        }
        else {
            console.log('something went wrong with the slot number')
        }

        // store final choice in class property
        this.slotNumberChoice = slotNumberChoice;

        // show confirm choice button
        const choiceConfirmButtonContainer = $('#choiceConfirmButtonContainer')
        choiceConfirmButtonContainer.show();
    }


    // define function to save the Choice after selecting it and confirm it
    saveChoice(){
        // get slotNumber from slotNumberChoice
        const slotNumber = this.slotNumberChoice
        // Calculate reaction time for choice
        this.rt_choice = performance.now() - this.timeVar;
        this.timeVar = performance.now(); // Update timeVar for next RT
        
        // get gameIndex from shuffled Index Array to save it to data for identification of game // remove shuffling for now
        //const gameIndex = this.gameNumber;

        // only one decimal digit for reaction time
        let reactionTime = this.rt_choice.toFixed(1);
        // get game and trialNumber to save it to JSON
        const gameNumber = this.gameNumber
        const trialNumber = this.trialNumber
        const practice = this.practice
        const block = this._filename_
        const pID = this.participant_id
        const blockIdx = this.blockIdx
        // if not first trial substract the delay times from the setTimeout()s
        if (trialNumber!=1){ //&& gameNumber!=this.randomNumber+1){
            reactionTime = (this.rt_choice - (this.timeNextTrial+this.timeReward)).toFixed(1)
        }
        // if first trial just take it plain
        else{
        }
        // write data to JSON file
        const datatoJSON = {
            pID,
            blockIdx,
            block,
            gameNumber,
            //gameIndex,
            trialNumber,
            slotNumber,
            reactionTime,
            practice,
        };
        // ensure to save also practice trials but seperatly
        saveData(datatoJSON, true)
        checkDataSaving();
    }

    // to start next game and next block after choice
    startNextAfterChoice() {
        // hide button again
        const choiceConfirmButtonContainer = $('#choiceConfirmButtonContainer')
        choiceConfirmButtonContainer.hide()
        $(`#slot${1} .selectedArm`).hide()
        $(`#slot${2} .selectedArm`).hide()
        // update gameNumber
        if (this.gameNumber < this.numberOfGames - 1) {
            this.showGameEndAfterChoice();
        } 

        // of continue to next block
        else if (this.gameNumber === this.numberOfGames - 1) {
            this.showEndBlockAfterChoice();
        }
    }
    
    showEndBlockAfterChoice() {
        $('#gameEndChoiceContainer').hide() // Hide game end choice container
        $('#nextBlockContainer').show(); // Show block end message
        $('#nextBlockMessage').show(); // Show next block message
        $('#nextBlockButton').show(); // Show next block button
    }

    showGameEndAfterChoice(){
        $('#gameEndChoiceContainer').hide() // Hide game end choice container
        $('#gameEndContainer').show(); // Show game end message
        $('#nextGameMessage').show(); // Show game end message
        $('#nextGameButton').show(); // Show "Next Game" button  
    }

}





function get_min_max_rewards(means, numTrials, practice){
    let min_means = [];
    let max_means = [];
    let numGames;
    if (practice === true){
        numGames = numberOfGamesPractice
    }
    else if (practice === false){
        numGames = numberOfGamesExperiment}
    else {
        console.log('practice should be true or false .842')}
    for (let i = 0; i < numGames; i++){
        if (means[0][i] < means[1][i]) {
            min_means.push(means[0][i]);
            max_means.push(means[1][i]);
        }
        else {
            min_means.push(means[1][i]);
            max_means.push(means[0][i]);
        }
    }
    min_rewards = (min_means.map((number) => number * numTrials)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    max_rewards = (max_means.map((number) => number * numTrials)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return [min_rewards, max_rewards]
}

function time_taken() {
    const endTime = Date.now()
    const time_store = {
        pID: participant_id,
        experiment: 'experiment',
        startTime: startTime,
        startTimeLocal: new Date(startTime),
        endTime: endTime,
        endTimeLocal: new Date(endTime),
    }
    saveTime(JSON.stringify(time_store));
    checkDataSaving();
}

function saveTime(filedata) {
    var filename = "../data/time/totalTime_participant_"+participant_id+".json";
    saveDataFlag = true;
    $.post("save_data.php", { postresult: filedata + "\n", postfile: filename })
}

function saveBonus(filedata, block){
    let filename = "../data/bonus/participant_" + filedata.pID + "_" + block + ".json";
    saveDataFlag = true;
    $.post("save_data.php", { postresult: JSON.stringify(filedata) + "\n", postfile: filename });
}

function saveData(filedata,choices=false) {
    saveDataFlag = true;
    if (choices===false){
        let filename = "../data/experiments/participant_" + filedata[0].pID + ".json";
        $.post("save_data.php", { postresult: JSON.stringify(filedata) + "\n", postfile: filename })
    .done(function (data) {
    })
    .fail(function (error) {
        console.error('Error saving data:', error);
    });

    }
    else if (choices===true){
        let filename = "../data/choices/participant_" + filedata.pID + "_choices.json";
        $.post("save_data.php", { postresult: JSON.stringify(filedata) + "\n", postfile: filename })
    }
    else
    {console.log('choices should be true or false')}
}

function checkDataSaving(){
    if (!saveDataFlag) {
      // Data saving is not complete, wait for a few seconds and check again.
      setTimeout(checkDataSaving, 1000); // Wait for 2 seconds and check again.
    } else {
      // Data saving is complete, you can proceed with the next steps.
      saveDataFlag = false;
    }
}



// shuffle array function outside class for the practice trials, this is a bit double shuffling but it works...
function shuffleArray(array_){
    for (let i = array_.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array_[i], array_[j]] = [array_[j], array_[i]]; // Swap elements
    }
    return array_;
}


function updateProgressBar(displayedDivs, totalDivs) {
    const progress = ((displayedDivs+totalDivsOffset) / (totalDivs+totalDivsOffset)) * 100;
    $("#progress").css("width", progress + "%");
}


function saveInstructionCheck(filedata) {
        let filename = "../data/checks/InstructionCheck.json";
        saveDataFlag = true;
        $.post("save_data.php", { postresult: JSON.stringify(filedata) + "\n", postfile: filename })
    }
function saveAttentionCheck(filedata) {
    let filename = "../data/checks/attention/AttentionCheck_participant-"+filedata.pID+".json";
    saveDataFlag = true;
    $.post("save_data.php", { postresult: JSON.stringify(filedata) + "\n", postfile: filename })
}



let firstWrong = null;
let check_counter = 0;
let instcounter = 0;
function instructioncheck(pg, pg_succeed) {
    let ch1 = 0;
    let ch2 = 0;
    let ch3 = 0;
    let ch4 = 0;
    let ch5 = 0;
    //check if correct answers are provided
    if ($("#icheck1").prop("checked")) { ch1 = 1 ;  $('#q1icheck1').css("color", "green")}
    else { colorWrongAnswer("q1", 'red') }
    if ($("#icheck2").prop("checked")) { ch2 = 1; $('#q2icheck2').css("color", "green") }
    else { colorWrongAnswer("q2", 'red') }
    if ($("#icheck3").prop("checked")) { ch3 = 1; $('#q3icheck3').css("color", "green") }
    else { colorWrongAnswer("q3", 'red') }
    if ($("#icheck4").prop("checked")) { ch4 = 1; $('#q4icheck4').css("color", "green") }
    else { colorWrongAnswer("q4", 'red') }
    if ($("#icheck5").prop("checked")) { ch5 = 1; $('#q5icheck5').css("color", "green") }
    else { colorWrongAnswer("q5", 'red') }
    let checksum = ch1 + ch2 + ch3 + ch4 + ch5;
    const criterion = 5;
    if (check_counter === 0) {
        firstWrong = 5-checksum;
    }

    // indicate correct answers
    check_counter++;

    // page transition 
    if (checksum === criterion) {
        // write data to JSON file
        const pID = participant_id
        const datatoJSON = {
            pID, 
            check_counter,
            firstWrong,
                };
        saveInstructionCheck(datatoJSON)
        checkDataSaving();
        clickStart(pg, pg_succeed);
        // alert
        alert('Great, you have answered all of the questions correctly. The study will now start.');
    }
    else {
            //if one or more answers are wrong, raise alert box
            alert('You have answered some of the questions wrong. Please try again.');
    }

}

function color(id, col) {
    $("#" + id).css("color", col);
}

function colorWrongAnswer(question, col) {
    const rbs = document.querySelectorAll('input[name="' + question + '\"]');
    for (const rb of rbs) {
        if (rb.checked) {
            color(question + rb.id, col)
            break;
        }
    }
}

// get subject ID
function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

