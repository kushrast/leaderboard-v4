/*YOUR CODE HERE*/

if(Meteor.isClient){
    Template.leaderboard.helpers({
        'player': function(){
            var currentUserId = Meteor.userId();
            /*YOUR CODE HERE*/

        },
        'selectedClass': function(){
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedPlayer');
            if(playerId == selectedPlayer){
                return "selected"
            }
        },
        'selectedPlayer': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            /*YOUR CODE HERE*/

        }
    });
    Template.leaderboard.events({
        'click .player': function(){
            var playerId = this._id;
            Session.set('selectedPlayer', playerId);
        },
        'click .increment': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            Meteor.call('updateScore', selectedPlayer, 5);
        },
        'click .decrement': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            Meteor.call('updateScore', selectedPlayer, -5);
        },
        'click .remove': function(){
            var selectedPlayer = Session.get('selectedPlayer');
            Meteor.call('removePlayer', selectedPlayer);
        }
    });
    Template.addPlayerForm.events({
        'submit form': function(){
            event.preventDefault();
            var playerNameVar = event.target.playerName.value;
            Meteor.call('createPlayer', playerNameVar);
            event.target.playerName.value = "";
        }
    });

    Meteor.subscribe('thePlayers');

}

if(Meteor.isServer){
    Meteor.publish('thePlayers', function(){
        var currentUserId = this.userId;
        /*YOUR CODE HERE*/
    });
}

Meteor.methods({
    'createPlayer': function(playerNameVar){
        check(playerNameVar, String);
        var currentUserId = Meteor.userId();
        if(currentUserId){
            /*YOUR CODE HERE*/
        }
    },
    'removePlayer': function(selectedPlayer){
        check(selectedPlayer, String);
        var currentUserId = Meteor.userId();
        if(currentUserId){
            /*YOUR CODE HERE*/
        }
    },
    'updateScore': function(selectedPlayer, scoreValue){
        check(selectedPlayer, String);
        check(scoreValue, Number);
        var currentUserId = Meteor.userId();
        if(currentUserId){
            /*YOUR CODE HERE*/
        }
    }
});