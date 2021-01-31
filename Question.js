class Question {

    constructor() {
      this.input = createInput("Name");
      this.option1 = createButton();
      this.option2 = createButton();
      
      this.question = createElement('h2');
    }
    hide(){
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.input.hide();
    }
  
    display(){
     
        this.title.html("MyQuizGame");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with letter 'E' but has only one letter? ");
        this.question.position(150,80);
        this.option1.html("1: Everyone ");
        this.option1.position(150,100);
        this.option2.html("2: Envelope ");
        this.option2.position(150,120);

        this.input.position(150,230);
  
    }
  }
  