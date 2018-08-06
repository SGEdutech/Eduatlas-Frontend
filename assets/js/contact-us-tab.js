const contactUs = (() => {
    let $contactPersonContainer;
    let $socialLinkContainer;
    let $opration_hours_containers;

    function cache() {
        $contactPersonContainer = $("#contactPersonContainer");
        $socialLinkContainer = $("#socialLinkContainer");
        $opration_hours_containers = $("#opration_hours_containers");
    }

    function render(user) {
        let contactPersonHtml = getContactPHtml(user);
        let socialHtml = getSocialHtml(user);
        let dayNTimeHtml = getDayNTimeHtml(user);
        $contactPersonContainer.append(contactPersonHtml);
        $socialLinkContainer.append(socialHtml);
        $opration_hours_containers.append(dayNTimeHtml);
    }

    function getContactPHtml(context) {
        return template.userEditTuitionContactP(context);
    }

    function getSocialHtml(context) {
        return template.userEditTuitionSocial(context);
    }

    function getDayNTimeHtml(user) {
        if (user === undefined) {
            return;
        }
        // $('#saveTimeBtn').click(() => addAllTimes(array));

        let context = {
            monFrom: '',
            monTo: '',
            tueFrom: '',
            tueTo: '',
            wedFrom: '',
            wedTo: '',
            thrFrom: '',
            thrTo: '',
            friFrom: '',
            friTo: '',
            satFrom: '',
            satTo: '',
            sunFrom: '',
            sunTo: '',
        };
        if (user.dayAndTimeOfOperation) {
            user.dayAndTimeOfOperation.forEach((obj) => {
                let expr = obj.day.toLowerCase();
                switch (expr) {
                    case 'monday':
                        context.monFrom = obj.fromTime ? obj.fromTime : '';
                        context.monTo = obj.toTime ? obj.toTime : '';
                        break;
                    case 'tuesday':
                        context.tueFrom = obj.fromTime ? obj.fromTime : '';
                        context.tueTo = obj.toTime ? obj.toTime : '';
                        break;
                    case 'wednesday':
                        context.wedFrom = obj.fromTime ? obj.fromTime : '';
                        context.wedTo = obj.toTime ? obj.toTime : '';
                        break;
                    case 'thursday':
                        context.thrFrom = obj.fromTime ? obj.fromTime : '';
                        context.thrTo = obj.toTime ? obj.toTime : '';
                        break;
                    case 'friday':
                        context.friFrom = obj.fromTime ? obj.fromTime : '';
                        context.friTo = obj.toTime ? obj.toTime : '';
                        break;
                    case 'saturday':
                        context.satFrom = obj.fromTime ? obj.fromTime : '';
                        context.satTo = obj.toTime ? obj.toTime : '';
                        break;
                    case 'sunday':
                        context.sunFrom = obj.fromTime ? obj.fromTime : '';
                        context.sunTo = obj.toTime ? obj.toTime : '';
                        break;
                }
            });
        }
        return template.userEditTuitionHours(context);
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();