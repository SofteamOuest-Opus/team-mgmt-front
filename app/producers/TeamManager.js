import {loadTeamType} from '../common/AvroTypeLoader';
import {assertValid} from './TeamValidator';
import customLogger from '../config/CustomLogger';
import connexion from '../config/connexion';
import {createTeam, getAllTeam, getTeam} from '../models/TeamDAO';

var logger = customLogger();

export default class TeamManager {


    save = function (team) {
        //connexion.transaction(t => {

        var valid = true;
        if (!team.name) {
            valid = false;
        }
        if (!valid) {
            logger.error({message: 'team is not valid'});
            return {'error': 'team is not valid'};
        } else {
            //const buffer = type.toBuffer(team);
            //logger.info({message:'save team' + buffer});
            //TODO : send  kafka
            createTeam(team);
            return team;

        }

        // })
//
    };


    get = function (id) {
        return getTeam(id);
    }

    getAll = function () {
        return getAllTeam();
    }

}