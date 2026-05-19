from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def status(request):
    return Response(
        {
            'message': 'wahoooo backend connected!!!',
            'database': 'sqlite',
            'routes': ['dashboard', 'pet-profile', 'schedule'],
        }
    )
